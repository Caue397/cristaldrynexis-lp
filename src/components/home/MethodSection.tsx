import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";


const highlights = [
  "Limpeza a seco: sem encharcar o carpete",
  "Secagem rápida, uso liberado em poucas horas",
  "Baixo ruído, sem impacto na rotina da empresa",
  "Elimina até 99% de ácaros, fungos e bactérias",
];

export default function MethodSection() {
  return (
    <section id="metodologia" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-stretch">
        <div className="flex flex-col gap-8 lg:flex-1">
          <SectionHeading
            align="left"
            eyebrow="Metodologia de Limpeza"
            title="Um processo pensado para não parar a sua operação"
            description={[
              "Combinamos equipamentos de alta performance e produtos específicos para higienizar carpetes comerciais em profundidade, restaurando aparência e conforto sem exigir a interdição do ambiente.",
              "Cada visita começa com uma avaliação do tipo de fibra e do nível de sujidade do ambiente, para calibrar temperatura, pressão e produtos usados na extração. Assim, garantimos o mesmo padrão de qualidade em qualquer área da sua empresa, do corredor de maior circulação às salas de reunião.",
            ]}
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-brand-tint/40 p-5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-brand-dark">
                  ✓
                </span>
                <span className="text-sm text-zinc-700">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        <Image
          src="/Carpetes-Cristal-DryNexis-Escritorio-2.png"
          alt="Limpeza de carpete"
          width={400}
          height={400}
          className="object-cover w-full lg:max-w-md rounded-2xl lg:aspect-auto"
        />
      </div>
    </section>
  );
}
