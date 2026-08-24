import Image from "next/image";

export default function WhatsappFloatingButton() {
  return (
    <a
      href="https://wa.me/5511994609042?text=Ol%C3%A1%2C%20vim%20do%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform hover:scale-105"
    >
      <Image src="/whatsapp-icon.png" alt="" width={32} height={32} className="h-8 w-8" />
    </a>
  );
}
