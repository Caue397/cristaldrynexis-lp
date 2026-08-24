import SectionHeading from "@/components/ui/SectionHeading";
import CtaButton from "@/components/ui/CtaButton";

const promises = [
  "VER o contraste imediato e a restauração das cores originais.",
  "SENTIR o toque macio e a revitalização das fibras do carpete renovado.",
  "TOCAR na certeza de um ambiente corporativo muito mais saudável, livre de umidade, fungos e bactérias.",
];

export default function ConsultingSection() {
  return (
    <section id="consultoria" className="bg-brand-tint/40 py-16 sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-start gap-6 px-6 text-left">
        <SectionHeading
          align="left"
          eyebrow="Faça um Teste"
          title="Solicite uma consultoria técnica de plano de manutenção e garanta até 200m² de experimentação da nossa limpeza"
          description={[
            "Descubra o modelo ideal para o seu negócio, com demonstração prática. Qual dos nossos modelos é o mais eficiente para a realidade da sua empresa?",
            "Nós ajudamos você a descobrir através de uma avaliação técnica detalhada e gratuita. Para que você tenha total segurança da nossa entrega, transformamos essa avaliação em uma oportunidade exclusiva: receba um atendimento teste comprobatório de até 200m² no seu próprio espaço.",
          ]}
        />

        <div className="flex flex-col gap-3 text-left">
          <p className="font-semibold text-brand-dark">Queremos que você e sua equipe possam:</p>
          <ul className="flex flex-col gap-2">
            {promises.map((promise) => (
              <li key={promise} className="flex items-start gap-3 text-sm text-zinc-600">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent text-xs font-bold text-brand-dark">
                  ✓
                </span>
                {promise}
              </li>
            ))}
          </ul>
        </div>

        <CtaButton
          label="Solicitar Consultoria"
          message="Olá, gostaria de solicitar uma consultoria técnica gratuita."
        />
      </div>
    </section>
  );
}
