import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";

const plans = [
  {
    name: "Avulso",
    description: "Ideal para uma primeira experiência ou uma necessidade pontual.",
    features: [
      "Visita técnica de diagnóstico",
      "Higienização completa do ambiente",
      "Laudo técnico ao final do serviço",
    ],
  },
  {
    name: "Mensal",
    description: "Para empresas que precisam manter o padrão de limpeza em dia.",
    features: [
      "Agenda fixa mensal",
      "Prioridade de atendimento",
      "Relatório de acompanhamento",
    ],
    highlighted: true,
  },
  {
    name: "Personalizado",
    description: "Contrato sob medida para grandes áreas ou múltiplas unidades.",
    features: [
      "Frequência definida com o cliente",
      "Condições comerciais exclusivas",
      "Gestor de conta dedicado",
    ],
  },
];

export default function ContractPlansSection() {
  return (
    <section id="contratos" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Modelos de Contrato"
          title="Um plano para cada necessidade"
          description="Do serviço pontual ao contrato recorrente, adaptamos a frequência ao tamanho e à rotina da sua empresa."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-6 rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-brand-accent bg-brand-dark text-white"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <div className="flex flex-col gap-2">
                <h3
                  className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-brand-dark"}`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-zinc-300" : "text-zinc-600"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-3 text-sm ${
                      plan.highlighted ? "text-zinc-200" : "text-zinc-700"
                    }`}
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-brand-dark">
                      ✓
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <CtaButton
                label="Falar com um Especialista"
                message={`Olá, vim do site e gostaria de saber mais sobre o plano ${plan.name}.`}
                className={
                  plan.highlighted
                    ? "mt-auto"
                    : "mt-auto bg-brand-dark text-white shadow-brand-dark/20 hover:brightness-110"
                }
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
