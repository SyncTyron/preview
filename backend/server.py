from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.image import MIMEImage
from email.utils import formataddr, make_msgid

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

LOGO_PATH = ROOT_DIR / "mail-logo.png"


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = ""
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


class ContactMessageCreate(BaseModel):
    name: str = Field(..., min_length=1)
    email: str = Field(..., min_length=1)
    phone: Optional[str] = ""
    message: str = Field(..., min_length=1)


def _smtp_send(to_addr: str, subject: str, plain_body: str,
               html_body: str = None, reply_to: str = None,
               inline_image_path: Path = None, inline_image_cid: str = None):
    smtp_host = os.environ.get("SMTP_HOST")
    smtp_port = int(os.environ.get("SMTP_PORT", 587))
    smtp_user = os.environ.get("SMTP_USER")
    smtp_pass = os.environ.get("SMTP_PASSWORD")
    contact_email = os.environ.get("CONTACT_EMAIL")

    if not all([smtp_host, smtp_user, smtp_pass, contact_email]):
        logger.warning("SMTP nicht konfiguriert, E-Mail wird nicht gesendet")
        return False

    # mixed -> related (bilder) -> alternative (plain/html)
    msg_root = MIMEMultipart("related")
    msg_root["From"] = formataddr(("Roda Haustechnik", contact_email))
    msg_root["To"] = to_addr
    msg_root["Subject"] = subject
    if reply_to:
        msg_root["Reply-To"] = reply_to

    msg_alt = MIMEMultipart("alternative")
    msg_root.attach(msg_alt)
    msg_alt.attach(MIMEText(plain_body, "plain", "utf-8"))
    if html_body:
        msg_alt.attach(MIMEText(html_body, "html", "utf-8"))

    if inline_image_path and inline_image_cid and inline_image_path.exists():
        with open(inline_image_path, "rb") as f:
            img = MIMEImage(f.read(), _subtype="png")
        img.add_header("Content-ID", f"<{inline_image_cid}>")
        img.add_header("Content-Disposition", "inline", filename="logo.png")
        msg_root.attach(img)

    with smtplib.SMTP(smtp_host, smtp_port) as server:
        server.starttls()
        server.login(smtp_user, smtp_pass)
        server.sendmail(contact_email, [to_addr], msg_root.as_string())
    return True


def send_admin_notification(name: str, email: str, phone: str, message: str):
    try:
        contact_email = os.environ.get("CONTACT_EMAIL")
        body = f"""Neue Website-Kontaktanfrage:

Name:    {name}
E-Mail:  {email}
Telefon: {phone or 'Nicht angegeben'}

Nachricht:
{message}

---
Diese E-Mail wurde automatisch vom Kontaktformular auf
https://roda-haustechnik.de gesendet. Auf "Antworten" klicken,
um direkt an den Absender zu antworten.
"""
        if _smtp_send(contact_email, f"Website Kontaktanfrage von {name}", body, reply_to=email):
            logger.info(f"Admin-Benachrichtigung gesendet fuer {name}")
    except Exception as e:
        logger.error(f"Admin-Mail fehlgeschlagen: {e}")


def send_customer_confirmation(name: str, email: str, message: str):
    try:
        contact_email = os.environ.get("CONTACT_EMAIL")
        logo_cid = make_msgid(domain="roda-haustechnik.de")[1:-1]  # ohne <>

        plain = f"""Hallo {name},

vielen Dank für Ihre Anfrage bei Roda Haustechnik!

Wir haben Ihre Nachricht erhalten und melden uns innerhalb von 24
Stunden (an Werktagen) persönlich bei Ihnen zurück.

Bei dringenden Anliegen oder unserem 24/7 Notdienst erreichen Sie
uns sofort unter:  +49 152 2100 6829

------------------------------------------------------------------
Ihre Nachricht an uns:

{message}
------------------------------------------------------------------

Mit freundlichen Grüßen
Marco Nobis
Roda Haustechnik · SHK-Meisterbetrieb

Schillerstr. 14 · 52134 Herzogenrath
Tel:  +49 152 2100 6829
Web:  https://roda-haustechnik.de
Mail: {contact_email}

Diese E-Mail wurde automatisch erzeugt – bitte antworten Sie
direkt auf diese Nachricht, wir lesen jede Antwort.
"""

        html = f"""\
<!DOCTYPE html>
<html lang="de">
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#FDFBF7;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1C1917;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#FDFBF7;padding:32px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.06);">
        <tr><td style="background:#f5f5f4;padding:24px 32px;">
          <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
            <tr>
              <td style="vertical-align:middle;padding-right:14px;line-height:0;">
                <img src="cid:{logo_cid}" width="36" height="48" alt="Roda Haustechnik Logo" style="display:block;height:48px;width:auto;border:0;outline:none;">
              </td>
              <td style="vertical-align:middle;">
                <h1 style="margin:0;font-size:22px;color:#0E6FB3;font-weight:700;letter-spacing:-.01em;line-height:1.1;">Roda Haustechnik</h1>
                <p style="margin:4px 0 0;color:#000000;font-size:14px;line-height:1.2;">Heizung, Sanit&auml;r &amp; Badsanierung</p>
              </td>
            </tr>
          </table>
        </td></tr>
        <tr><td style="padding:32px;">
          <p style="margin:0 0 16px;font-size:16px;">Hallo <strong>{name}</strong>,</p>
          <p style="margin:0 0 16px;font-size:16px;line-height:1.55;">
            vielen Dank für Ihre Anfrage &ndash; wir haben sie erhalten und melden uns
            <strong>schnellstmöglich</strong> persönlich bei Ihnen zurück.
          </p>
          <div style="margin:24px 0;padding:16px 20px;background:#FFF5E6;border-left:4px solid #F9B130;border-radius:4px;">
            <p style="margin:0;font-size:14px;line-height:1.5;">
              <strong>Es brennt? 24/7 Notdienst:</strong><br>
              <a href="tel:+4915221006829" style="color:#0E6FB3;text-decoration:none;font-weight:600;font-size:18px;">&#128222; +49 152 2100 6829</a>
            </p>
          </div>
          <p style="margin:24px 0 8px;font-size:13px;color:#737373;text-transform:uppercase;letter-spacing:.06em;">Ihre Nachricht an uns</p>
          <div style="background:#F5F5F4;padding:16px 20px;border-radius:8px;font-size:14px;line-height:1.55;white-space:pre-wrap;">{message}</div>
          <p style="margin:32px 0 0;font-size:15px;">Mit freundlichen Grüßen<br><strong>Marco Nobis</strong><br><span style="color:#737373;">Roda Haustechnik</span></p>
        </td></tr>
        <tr><td style="background:#F5F5F4;padding:20px 32px;font-size:12px;color:#737373;line-height:1.5;">
          Roda Haustechnik &middot; Schillerstr. 14 &middot; 52134 Herzogenrath &middot;
          <a href="https://roda-haustechnik.de" style="color:#0E6FB3;">roda-haustechnik.de</a><br>
          Diese E-Mail wurde automatisch erzeugt &ndash; Sie können direkt auf diese Nachricht antworten.
        </td></tr>
      </table>
    </td></tr>
  </table>
</body></html>"""

        if _smtp_send(email, "Wir haben Ihre Anfrage erhalten - Roda Haustechnik",
                      plain, html_body=html,
                      inline_image_path=LOGO_PATH, inline_image_cid=logo_cid):
            logger.info(f"Eingangsbestaetigung an {email} gesendet")
    except Exception as e:
        logger.error(f"Bestaetigungs-Mail an {email} fehlgeschlagen: {e}")


@api_router.get("/")
async def root():
    return {"message": "Roda Haustechnik API"}


@api_router.post("/contact", response_model=ContactMessage)
async def create_contact(input_data: ContactMessageCreate):
    contact = ContactMessage(**input_data.model_dump())
    doc = contact.model_dump()
    await db.contact_messages.insert_one(doc)
    doc.pop("_id", None)

    send_admin_notification(input_data.name, input_data.email, input_data.phone, input_data.message)
    send_customer_confirmation(input_data.name, input_data.email, input_data.message)

    return contact


@api_router.get("/contact", response_model=List[ContactMessage])
async def get_contacts():
    contacts = await db.contact_messages.find({}, {"_id": 0}).to_list(1000)
    return contacts


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
