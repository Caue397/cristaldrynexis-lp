import SectionHeading from "@/components/ui/SectionHeading";
import FaqItem from "@/components/home/FaqItem";

const faqs = [
  {
    question: "Precisa retirar as persianas ou cortinas para higienizar?",
    answer:
      "Não. O serviço é feito com as peças no próprio local, sem necessidade de desmontagem.",
  },
  {
    question: "Quanto tempo leva para secar?",
    answer:
      "Como o processo é a seco, a secagem é rápida — o ambiente pode ser usado normalmente logo após o serviço.",
  },
  {
    question: "Funciona em qualquer tipo de tecido ou persiana?",
    answer:
      "Sim. Avaliamos o material antes do serviço para calibrar o processo mais adequado a cada tipo de tecido, lâmina ou revestimento.",
  },
  {
    question: "Com que frequência devo higienizar?",
    answer:
      "Depende do fluxo do ambiente e da exposição a poeira. Nossa equipe pode recomendar a frequência ideal durante a avaliação técnica.",
  },
  {
    question: "O serviço interrompe o expediente da empresa?",
    answer:
      "Não. Como a secagem é imediata, o ambiente pode ser liberado logo após a higienização, sem impacto na rotina.",
  },
  {
    question: "Vocês emitem laudo técnico do serviço?",
    answer:
      "Sim. Cada higienização gera um relatório técnico que pode ser usado para controle interno da sua empresa.",
  },
];

export default function BlindsFaqSection() {
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
