import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";

const plans = [
  {
    name: "Full Service",
    description: "Operação especializada por demanda ou manutenção.",
    detail: "Contratação de máquina + mão de obra + insumos:",
    features: [
      "Fornecemos as máquinas avançadas",
      "Produtos exclusivos inclusos",
      "Mão de obra técnica altamente qualificada",
    ],
  },
  {
    name: "Outsourcing Inteligente",
    description: "Locação, insumos e capacitação.",
    detail: "Locação da máquina + mão de obra da Cristal Dry Nexis:",
    features: [
      "Locação da nossa linha de maquinário",
      "Produtos especializados inclusos",
      "Treinamento completo de implantação para a sua equipe",
    ],
    highlighted: true,
  },
  {
    name: "Sistema HaaS",
    description: "Hardware as a Service: a revolução em gestão de facilidades.",
    detail: "Locação da máquina (mão de obra da sua equipe interna):",
    features: [
      "Tecnologia pioneira sempre atualizada",
      "Fornecimento de ativos e metodologia de trabalho",
      "Foco na otimização de custos, sem preocupações operacionais",
    ],
  },
];

export default function ContractPlansSection() {
  return (
    <section id="contratos" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Como Contratar"
          title="Modelos de Negócio"
          description="Para nos adaptarmos perfeitamente à infraestrutura e à rotina da sua empresa, desenhamos três modelos de negócios inteligentes."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`flex flex-col gap-6 rounded-2xl border p-8 ${
                plan.highlighted
                  ? "border-brand-accent bg-brand-dark text-white"
                  : "border-zinc-200 bg-white"
              }`}
            >
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-extrabold text-brand-accent">{index + 1}</span>
                <h3
                  className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-brand-dark"}`}
                >
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? "text-zinc-300" : "text-zinc-600"}`}>
                  {plan.description}
                </p>
                <p
                  className={`text-sm font-semibold ${plan.highlighted ? "text-white" : "text-brand-dark"}`}
                >
                  {plan.detail}
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
                label="Solicitar Orçamento"
                message={`Olá, vim do site e gostaria de saber mais sobre o modelo ${plan.name}.`}
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
