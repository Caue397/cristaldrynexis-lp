import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/home/FaqItem";

const faqs = [
  {
    question: "É preciso interromper o funcionamento da empresa durante a limpeza?",
    answer:
      "Não. O processo de limpeza a seco não encharca o carpete, então o ambiente pode continuar em uso normalmente ou o serviço pode ser feito fora do horário de expediente.",
  },
  {
    question: "Quanto tempo leva para o carpete secar?",
    answer:
      "Como o método não utiliza água em excesso, a secagem é rápida — em poucas horas o espaço já pode ser liberado para uso.",
  },
  {
    question: "Qual a frequência recomendada de higienização?",
    answer:
      "Depende do fluxo de pessoas no ambiente. Por isso oferecemos uma consultoria técnica gratuita para indicar a frequência ideal para o seu caso.",
  },
  {
    question: "A tecnologia funciona em qualquer tipo de carpete?",
    answer:
      "Sim. Nossa metodologia se adapta a diferentes tipos de fibra e instalação, sempre respeitando as características de cada material.",
  },
  {
    question: "Vocês emitem laudo técnico do serviço?",
    answer:
      "Sim. Cada higienização gera um laudo técnico que pode ser usado para controle interno ou auditorias da sua empresa.",
  },
  {
    question: "É possível fechar um contrato recorrente?",
    answer:
      "Sim. Temos modelos de contrato mensal e personalizado, com prioridade de agenda para empresas que precisam manter o padrão de limpeza em dia.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-brand-tint/40 py-16 sm:py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6">
        <SectionHeading eyebrow="FAQ" title="Dúvidas Frequentes" />

        <div className="flex flex-col divide-y divide-zinc-200 rounded-xl border border-zinc-200 bg-white">
          {faqs.map((faq) => (
            <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
