import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/#resultados", label: "Resultados" },
  { href: "/#aplicacoes", label: "Aplicações" },
  { href: "/#contratos", label: "Contratos" },
  { href: "/persianas-e-cortinas", label: "Persianas e Cortinas" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#faq", label: "Dúvidas" },
];

const services = [
  "Higienização Comercial de Carpetes",
  "Limpeza de Estofados Corporativos",
  "Poltronas de Auditório e Cinema",
  "Tapetes Decorativos",
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-zinc-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4">
          <Image
            src="/cristal-dry-nexis-logo.png"
            alt="Cristal Dry Nexis"
            width={178}
            height={80}
            className="h-14 w-64"
          />
          <p className="text-sm text-zinc-400">
            Higienização comercial de carpetes por limpeza a seco há 35 anos no mercado, sem
            interromper a rotina da sua empresa.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
            Navegação
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
            Serviços
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            {services.map((service) => (
              <li key={service}>{service}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-brand-accent">
            Contato
          </h3>
          <ul className="flex flex-col gap-2 text-sm">
            <li>Atendimento em todo o Brasil</li>
            <li>(11) 99460-9042</li>
            <li>atendimento@homeclean.com.br</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <p className="mx-auto max-w-6xl px-6 text-xs text-zinc-500">
          © {new Date().getFullYear()} Cristal Dry Nexis. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
