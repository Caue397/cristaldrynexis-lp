import SectionHeading from "@/components/ui/SectionHeading";

const differentials = [
  {
    title: "Limpeza sem retirada",
    description:
      "Persianas e cortinas são higienizadas no próprio local, sem desmontagem, poupando tempo e logística.",
  },
  {
    title: "Tecido preservado",
    description:
      "Processo a seco que remove sujeira profunda sem desbotar, encolher ou danificar o material.",
  },
  {
    title: "Sem interrupção do expediente",
    description:
      "Secagem imediata permite que o ambiente volte a ser usado logo após o serviço.",
  },
];

export default function BlindsDifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-brand-tint/40 py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Feito para preservar o ambiente da sua empresa"
          description={[
            "Persianas e cortinas acumulam poeira, ácaros e odores que a limpeza comum não alcança.",
            "Nossa tecnologia higieniza em profundidade sem retirar as peças e sem parar a rotina do seu negócio.",
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
