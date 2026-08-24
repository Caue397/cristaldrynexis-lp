import SectionHeading from "@/components/ui/SectionHeading";
import TechnologyCarousel from "@/components/home/TechnologyCarousel";

const details = [
  {
    title: "Cristalização",
    description:
      "A tecnologia Cristal DryNexis atua onde a aspiração comum não alcança. Nossa solução a seco transforma a sujeira incrustada em microcristais removíveis, enquanto o equipamento exclusivo escova profundamente as fibras do carpete, liberando partículas presas da base à superfície.",
  },
  {
    title: "Verticalização",
    description:
      "Além da higienização profunda, as escovas especiais ajudam a verticalizar as fibras, recuperando a maciez, a densidade da trama e a aparência original do revestimento, tudo com resultado imediato e sem interdição do ambiente.",
  },
  {
    title: "Efeito Acumulativo: Nível Cristal de Limpeza",
    description:
      "Nosso processo de cristalização a seco proporciona uma limpeza profunda e de efeito gradativo. Isso significa que a cada ciclo de limpeza, os resultados se tornam ainda melhores e mais duradouros, facilitando a conservação diária.",
  },
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
            title="Tecnologia exclusiva Cristal DryNexis"
          />

          <div className="flex flex-col gap-6">
            {details.map((detail) => (
              <div key={detail.title} className="flex flex-col gap-2">
                <h3 className="font-semibold text-brand-accent">{detail.title}</h3>
                <p className="text-sm text-zinc-300">{detail.description}</p>
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
