const WHATSAPP_NUMBER = "5511994609042";

export function buildWhatsappLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
