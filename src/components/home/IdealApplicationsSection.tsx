import SectionHeading from "@/components/ui/SectionHeading";

const applications = [
  {
    icon: "🏢",
    title: "Escritórios Corporativos",
    description: "Higienização programada sem interromper o expediente da equipe.",
  },
  {
    icon: "🏨",
    title: "Hotéis e Pousadas",
    description: "Carpetes sempre apresentáveis para hóspedes, com secagem rápida entre diárias.",
  },
  {
    icon: "🏥",
    title: "Clínicas e Hospitais",
    description: "Processo indicado para ambientes que exigem alto padrão de higiene.",
  },
  {
    icon: "🛍️",
    title: "Shoppings e Centros Comerciais",
    description: "Atendimento em grandes áreas, fora do horário de funcionamento.",
  },
  {
    icon: "🎭",
    title: "Auditórios e Cinemas",
    description: "Higienização de carpetes e poltronas com alto fluxo de público.",
  },
  {
    icon: "🍽️",
    title: "Restaurantes",
    description: "Remoção de manchas e odores sem interromper o atendimento.",
  },
];

export default function IdealApplicationsSection() {
  return (
    <section id="aplicacoes" className="bg-brand-tint/40 py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Onde Atuamos"
          title="Aplicações Ideais"
          description="Nossa tecnologia de limpeza a seco se adapta a diferentes segmentos e rotinas operacionais."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <div
              key={application.title}
              className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-white p-6"
            >
              <span className="text-3xl" aria-hidden="true">
                {application.icon}
              </span>
              <h3 className="font-semibold text-brand-dark">{application.title}</h3>
              <p className="text-sm text-zinc-600">{application.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
