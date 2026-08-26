import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    title: "Avaliação técnica",
    description:
      "Identificamos o tipo de tecido, lâmina ou material das persianas e cortinas para definir o processo mais adequado.",
  },
  {
    title: "Preparação do ambiente",
    description:
      "Protegemos móveis e superfícies próximas antes de iniciar a higienização no local.",
  },
  {
    title: "Limpeza a seco no local",
    description:
      "Removemos poeira, ácaros e sujeira acumulada sem desmontar ou retirar as peças do lugar.",
  },
  {
    title: "Secagem imediata",
    description:
      "O ambiente fica pronto para uso logo após o serviço, sem interromper o expediente.",
  },
];

const included = [
  "Mão de obra especializada e uniformizada",
  "Equipamentos e produtos de alta performance",
  "Relatório técnico do serviço realizado",
  "Sem necessidade de retirada das peças",
];

export default function BlindsProcessSection() {
  return (
    <section id="processo" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Como Funciona"
          title="Etapas do processo e tudo incluso"
          description="Um processo simples, feito no local, para higienizar persianas e cortinas sem tirar sua empresa do ritmo."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col gap-2 rounded-xl border border-zinc-200 bg-white p-6"
            >
              <span className="text-3xl font-extrabold text-brand-accent">{index + 1}</span>
              <h3 className="font-semibold text-brand-dark">{step.title}</h3>
              <p className="text-sm text-zinc-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 rounded-2xl bg-brand-tint/40 p-6 sm:p-8">
          <h3 className="font-semibold text-brand-dark">Tudo incluso</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
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
