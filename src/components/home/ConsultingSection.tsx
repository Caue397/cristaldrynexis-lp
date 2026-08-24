import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";

export default function ConsultingSection() {
  return (
    <section id="consultoria" className="bg-brand-tint/40 py-16 sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 text-center">
        <SectionHeading
          eyebrow="Consultoria Técnica"
          title="Não sabe qual a frequência ideal para o seu carpete?"
          description="Oferecemos uma visita técnica gratuita para avaliar o estado do carpete, o fluxo do ambiente e recomendar o plano de higienização mais adequado para a sua empresa — sem compromisso."
        />

        <CtaButton
          label="Agendar Consultoria Gratuita"
          message="Olá, gostaria de agendar uma consultoria técnica gratuita."
        />
      </div>
    </section>
  );
}
