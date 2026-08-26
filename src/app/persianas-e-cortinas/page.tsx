import type { Metadata } from "next";
import BlindsHero from "@/components/persianas-cortinas/BlindsHero";
import ClientsSection from "@/components/home/ClientsSection";
import BlindsBeforeAfterSection from "@/components/persianas-cortinas/BlindsBeforeAfterSection";
import BlindsProcessSection from "@/components/persianas-cortinas/BlindsProcessSection";
import BlindsDifferentialsSection from "@/components/persianas-cortinas/BlindsDifferentialsSection";
import BlindsOtherServicesSection from "@/components/persianas-cortinas/BlindsOtherServicesSection";
import BlindsFaqSection from "@/components/persianas-cortinas/BlindsFaqSection";

export const metadata: Metadata = {
  title: "Higienização de Persianas e Cortinas | Cristal Dry Nexis",
  description:
    "Limpeza a seco comercial de persianas e cortinas, feita no local, sem retirar as peças e sem interromper o expediente da sua empresa.",
};

export default function PersianasECortinasPage() {
  return (
    <main className="flex flex-1 flex-col">
      <BlindsHero />
      <ClientsSection />
      <BlindsBeforeAfterSection />
      <BlindsProcessSection />
      <BlindsDifferentialsSection />
      <BlindsOtherServicesSection />
      <BlindsFaqSection />
    </main>
  );
}
