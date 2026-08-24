import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";

const highlights = [
  "Remoção de manchas antigas e sujeira encrustada nas fibras",
  "Cores e textura originais recuperadas sem desbotar o carpete",
  "Resultado visível em uma única higienização",
];

export default function BeforeAfterSection() {
  return (
    <section id="resultados" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row lg:items-center">
        <div className="w-full lg:flex-1 lg:max-w-2xl">
          <BeforeAfterSlider
            beforeSrc="/antes-4-scaled.jpg"
            afterSrc="/depois-4-scaled.jpg"
            beforeAlt="Carpete antes da higienização"
            afterAlt="Carpete depois da higienização"
          />
        </div>

        <div className="flex flex-col gap-6 lg:shrink-0 lg:basis-xs">
          <SectionHeading
            align="left"
            eyebrow="Resultados Reais"
            title="Antes e Depois"
            description="Arraste o divisor para comparar o antes e o depois da nossa higienização comercial de carpetes."
          />

          <ul className="flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-600">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-brand-dark">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
