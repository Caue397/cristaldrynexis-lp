import SectionHeading from "@/components/ui/SectionHeading";
import Image from "next/image";

const benefits = [
  {
    title: "Tudo limpo e seco imediatamente",
    description: "Eficiência em resultados imediatos sem interdição do espaço.",
  },
  {
    title: "Higiene de nível Cristal",
    description:
      "Eliminação de 99% de ácaros, bactérias e germes. A saúde do ambiente onde os olhos não veem.",
  },
  {
    title: "Alta produtividade",
    description:
      "Produção de até 250 m² por hora com equipe reduzida e menor impacto de manutenção.",
  },
  {
    title: "Vida útil prolongada",
    description:
      "Verticalização das fibras através da escovação cilíndrica, aumentando a performance do revestimento.",
  },
  {
    title: "Redução de custos operacionais",
    description:
      "Rapidez na entrega que reduz a necessidade de acompanhamento e horas extras.",
  },
  {
    title: "ROI com eficiência produtiva",
    description:
      "Ambientes saudáveis geram ganho expressivo na produtividade dos funcionários.",
  },
];

export default function MethodSection() {
  return (
    <section id="metodologia" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-stretch">
        <div className="flex flex-col gap-8 lg:flex-1">
          <SectionHeading
            align="left"
            eyebrow="Metodologia de Limpeza"
            title="Benefícios práticos da nossa metodologia"
            description="Nossa metodologia entrega resultados visíveis sem interromper a operação da empresa. A tecnologia remove sujidades profundas, revitaliza as fibras do carpete e permite o uso imediato do ambiente, com mais praticidade, higiene e eficiência."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-brand-tint/40 p-5"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-dark text-sm font-bold text-brand-accent">
                  ✓
                </span>
                <h3 className="font-semibold text-brand-dark">{benefit.title}</h3>
                <p className="text-sm text-zinc-700">{benefit.description}</p>
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
