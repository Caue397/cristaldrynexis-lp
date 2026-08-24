import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ClientsSection() {
  return (
    <section id="clientes" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Quem Confia na Cristal Dry Nexis"
          title="Alguns Clientes"
          description="Empresas de diversos segmentos já contam com a nossa higienização comercial de carpetes."
        />

        <div className="relative aspect-[2018/723] w-full">
          <Image
            src="/Cristal-DN-Clientes.png"
            alt="Logos de clientes da Cristal Dry Nexis"
            fill
            className="object-contain"
            sizes="(min-width: 1024px) 1152px, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
