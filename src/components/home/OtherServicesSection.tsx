import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";

const services = [
  {
    icon: "🧹",
    title: "Limpeza Geral de Carpetes",
    description: "Higienização completa e periódica para manter o padrão de limpeza em dia.",
  },
  {
    icon: "🗺️",
    title: "Remoção de Manchas em Grandes Áreas",
    description: "Tratamento de sujeira espalhada por grandes extensões de carpete.",
  },
  {
    icon: "🔴",
    title: "Manchas Pontuais",
    description: "Remoção rápida de manchas localizadas, sem precisar higienizar todo o ambiente.",
  },
  {
    icon: "🚶",
    title: "Manchas de Caminhos",
    description: "Tratamento das áreas de maior tráfego, onde a sujeira se acumula mais rápido.",
  },
  {
    icon: "🥤",
    title: "Manchas de Bebidas",
    description: "Remoção de resíduos de café, refrigerante e outros líquidos sem deixar odor.",
  },
  {
    icon: "⏳",
    title: "Manchas Antigas",
    description: "Tratamento especializado para manchas incrustadas há muito tempo no carpete.",
  },
];

export default function OtherServicesSection() {
  return (
    <section id="servicos" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Mais Serviços"
          title="Serviços correlacionados"
          description="Além do carpete, cuidamos de outros ambientes corporativos que também precisam de higienização especializada."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
