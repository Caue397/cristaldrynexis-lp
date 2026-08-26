import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";

const services = [
  {
    icon: "🧶",
    title: "Higienização Comercial de Carpetes",
    description: "Limpeza a seco de carpetes com tecnologia exclusiva de cristalização.",
  },
  {
    icon: "🛋️",
    title: "Estofados Corporativos",
    description: "Higienização de sofás e poltronas de recepções e salas de espera.",
  },
  {
    icon: "🧵",
    title: "Tapetes Decorativos",
    description: "Renovação de cor e textura sem encharcar peças delicadas.",
  },
  {
    icon: "🚪",
    title: "Divisórias e Painéis",
    description: "Limpeza de divisórias acústicas e painéis de tecido em ambientes corporativos.",
  },
];

export default function BlindsOtherServicesSection() {
  return (
    <section id="servicos" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Mais Serviços"
          title="Serviços correlacionados"
          description="Além de persianas e cortinas, cuidamos de outros ambientes corporativos que também precisam de higienização especializada."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col gap-3 rounded-xl border border-zinc-200 bg-brand-tint/40 p-6"
            >
              <span className="text-3xl" aria-hidden="true">
                {service.icon}
              </span>
              <h3 className="font-semibold text-brand-dark">{service.title}</h3>
              <p className="text-sm text-zinc-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <CtaButton
            label="Solicitar Orçamento"
            message="Olá, vim do site e gostaria de solicitar um orçamento."
          />
        </div>
      </div>
    </section>
  );
}
