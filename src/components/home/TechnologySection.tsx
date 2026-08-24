import SectionHeading from "@/components/ui/SectionHeading";
import TechnologyCarousel from "@/components/home/TechnologyCarousel";

const advantages = [
  "Extração a seco de alta performance",
  "Sem encharcamento, sem risco de mofo",
  "Até 7x mais eficiente que métodos tradicionais",
  "Renova a cor e o volume das fibras",
  "Elimina até 99% de ácaros, fungos e bactérias",
  "Produtos biodegradáveis e seguros",
];

export default function TechnologySection() {
  return (
    <section id="tecnologia" className="bg-brand-dark py-16 text-white sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-stretch">
        <div className="flex flex-col gap-8 lg:flex-1">
          <SectionHeading
            align="left"
            tone="light"
            eyebrow="Tecnologia Cristal Dry Nexis"
            title="A tecnologia de limpeza a seco mais avançada do Brasil"
            description="Nosso sistema exclusivo combina equipamentos de última geração com insumos de alta performance, entregando uma higienização profunda sem parar a rotina da sua empresa."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {advantages.map((advantage) => (
              <div
                key={advantage}
                className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-brand-dark">
                  ✓
                </span>
                <span className="text-sm text-zinc-200">{advantage}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="aspect-[4/3] w-full lg:aspect-auto lg:max-w-sm">
          <TechnologyCarousel />
        </div>
      </div>
    </section>
  );
}
