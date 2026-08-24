import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

const applications = [
  {
    image: "/escritorio-com-tapete-1.webp",
    title: "Escritórios Corporativos",
    description:
      "Carpetes limpos, secos e higienizados sem interromper a rotina da equipe — ideal para empresas que valorizam saúde e produtividade.",
  },
  {
    image: "/carpete-hotel-1.jpg",
    title: "Hotéis e Auditórios",
    description:
      "Higienização profunda de quartos, corredores e salas de eventos, com secagem imediata e menor impacto na operação.",
  },
  {
    image: "/centro-de-convencoes.jpg",
    title: "Centros de Convenções",
    description:
      "Limpeza rápida e profunda para espaços de grande circulação, prontos entre um evento e outro sem tempo de espera.",
  },
];

export default function IdealApplicationsSection() {
  return (
    <section id="aplicacoes" className="bg-brand-tint/40 py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Onde Atuamos"
          title="Aplicações Ideais"
          description={[
            "A tecnologia Cristal Dry Nexis foi desenvolvida para ambientes de alto fluxo, onde limpeza, saúde e continuidade da operação precisam andar juntas.",
            "Com higienização profunda a seco e liberação imediata do espaço, é a solução ideal para empresas que não podem parar.",
          ]}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {applications.map((application) => (
            <div
              key={application.title}
              className="flex flex-col gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white"
            >
              <div className="relative aspect-[780/500] w-full">
                <Image
                  src={application.image}
                  alt={application.title}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 384px, 100vw"
                />
              </div>
              <div className="flex flex-col gap-2 p-6 pt-0">
                <h3 className="font-semibold text-brand-dark">{application.title}</h3>
                <p className="text-sm text-zinc-600">{application.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
