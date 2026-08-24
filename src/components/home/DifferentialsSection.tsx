import SectionHeading from "@/components/ui/SectionHeading";

const differentials = [
  {
    title: "Inovação com a Cristalização",
    description:
      "O produto cristaliza as sujeiras, transformando-as em sólidos removíveis das fibras, deixando o carpete seco na hora.",
  },
  {
    title: "Equipamento exclusivo",
    description:
      "Tecnologia própria, com sistema de escovação com 4 escovas cilíndricas que combina pressão e tufagem milimétrica para limpeza vertical profunda.",
  },
  {
    title: "Eficiência em Resultados",
    description:
      "Tecnologia 100% a seco com resultados imediatos, permitindo foco total em pontos críticos sem tempo de espera.",
  },
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-brand-tint/40 py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Feito para criar ambientes que respiram saúde"
          description={[
            "Nós existimos para criar ambientes que respiram saúde e inspiram pessoas.",
            "Transformamos a limpeza em uma ferramenta estratégica para que cada colaborador se sinta bem e alcance seu máximo potencial.",
          ]}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-6"
            >
              <span className="text-3xl font-extrabold text-brand-accent">{index + 1}</span>
              <h3 className="font-semibold text-brand-dark">{item.title}</h3>
              <p className="text-sm text-zinc-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
