import Image from "next/image";
import CtaButton from "@/components/ui/CtaButton";

export default function BlindsHero() {
  return (
    <section className="relative h-[55vh] overflow-hidden bg-brand-dark">
      <Image
        src="/Cristal-Dry-Nexis-capa-mobile-1.jpg"
        alt="Equipamento Cristal Dry Nexis em uso na higienização comercial"
        fill
        className="object-right object-contain"
        priority
      />
      <div className="absolute inset-0 bg-brand-dark/80 lg:hidden" />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
        <div className="flex max-w-xl flex-col gap-6">
          <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl">
            Higienização Comercial de Persianas e Cortinas
          </h1>
          <p className="text-base text-zinc-200">
            Limpeza a seco realizada no local, sem retirar as peças e sem interromper o
            expediente da sua empresa.{" "}
            <span className="font-semibold text-white">
              São 35 anos no mercado de higienização.
            </span>
          </p>
          <div>
            <CtaButton
              label="Solicitar Orçamento"
              message="Olá, vim do site e gostaria de solicitar um orçamento para limpeza de persianas e cortinas."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
