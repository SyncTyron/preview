import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/491632106688"
      target="_blank"
      rel="nofollow noopener noreferrer"
      data-testid="whatsapp-button"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EB954] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
      aria-label="WhatsApp-Chat mit MK Gebäudemanagement starten (in neuem Tab)"
    >
      <MessageCircle size={28} fill="white" stroke="none" />
    </a>
  );
}
