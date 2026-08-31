import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfterSlider from "@/components/home/BeforeAfterSlider";

export default function BlindsBeforeAfterSection() {
  return (
    <section id="resultados" className="bg-white py-16 sm:py-24">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeading
          eyebrow="Resultados Reais"
          title="Antes e Depois"
          description="Arraste o divisor para comparar o antes e o depois da nossa higienização comercial de persianas e cortinas."
        />

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-bold text-brand-dark">Persiana</h3>
            <BeforeAfterSlider
              beforeSrc="/cortina-antes.png"
              afterSrc="/cortina-depois.png"
              beforeAlt="Persiana antes da limpeza"
              afterAlt="Persiana depois da limpeza"
            />
          </div>

          <div className="flex flex-col gap-4 sm:items-end">
            <h3 className="text-lg font-bold text-brand-dark">Cortina</h3>
            <BeforeAfterSlider
              beforeSrc="/cortina-antes.png"
              afterSrc="/cortina-depois.png"
              beforeAlt="Cortina antes da limpeza"
              afterAlt="Cortina depois da limpeza"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
