import { Helmet } from "react-helmet-async";

// BASE_URL kann beim Build via REACT_APP_BASE_URL überschrieben werden.
// Default ist die aktuelle Domain, nach Migration → roda-haustechnik.de
const BASE_URL = process.env.REACT_APP_BASE_URL || "https://roda-haustechnik.de";
const SITE_NAME = "Roda Haustechnik";

export default function SeoHelmet({ title, description, path = "/", noIndex = false }) {
  const fullTitle = title ? `${title} – ${SITE_NAME}` : `${SITE_NAME} – SHK Meisterbetrieb Herzogenrath`;
  const url = `${BASE_URL}${path.endsWith("/") ? path : path + "/"}`;
  const desc = description || "Roda Haustechnik – SHK-Meisterbetrieb in Herzogenrath. Sanitär, Heizung, Badsanierung, 24/7 Notdienst.";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      {noIndex && <meta name="robots" content="noindex,follow" />}
    </Helmet>
  );
}
