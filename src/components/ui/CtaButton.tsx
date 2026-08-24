import { buildWhatsappLink } from "@/lib/whatsapp";

type CtaButtonProps = {
  label: string;
  message: string;
  className?: string;
};

export default function CtaButton({ label, message, className = "" }: CtaButtonProps) {
  return (
    <a
      href={buildWhatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-4 text-base font-semibold text-brand-dark shadow-lg shadow-brand-accent/30 transition-colors hover:brightness-95 ${className}`}
    >
      {label}
    </a>
  );
}
