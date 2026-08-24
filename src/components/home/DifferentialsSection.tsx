import SectionHeading from "@/components/ui/SectionHeading";

const differentials = [
  "Atendimento fora do horário comercial, sem parar a operação",
  "Equipe uniformizada, treinada e identificada",
  "Laudo técnico de higienização por visita",
  "Cobertura em todo o território nacional",
  "Contrato recorrente com prioridade de agenda",
  "Produtos seguros, sem odores fortes residuais",
];

export default function DifferentialsSection() {
  return (
    <section id="diferenciais" className="bg-brand-tint/40 py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Diferenciais"
          title="Feito para o ritmo da sua empresa"
          description="Entendemos que carpete parado é operação parada. Por isso, cada detalhe do nosso atendimento é pensado para minimizar impacto."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 rounded-xl border border-zinc-200 bg-white p-5"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent text-sm font-bold text-brand-dark">
                ✓
              </span>
              <span className="text-sm text-zinc-700">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
