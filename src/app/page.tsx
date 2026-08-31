import Hero from "@/components/home/Hero";
import BeforeAfterSection from "@/components/home/BeforeAfterSection";
import ClientsSection from "@/components/home/ClientsSection";
import IdealApplicationsSection from "@/components/home/IdealApplicationsSection";
import MethodSection from "@/components/home/MethodSection";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import TechnologySection from "@/components/home/TechnologySection";
import ContractPlansSection from "@/components/home/ContractPlansSection";
import ConsultingSection from "@/components/home/ConsultingSection";
import OtherServicesSection from "@/components/home/OtherServicesSection";
import FaqSection from "@/components/home/FaqSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <ClientsSection />
      <BeforeAfterSection />
      <TechnologySection />
      <MethodSection />
      <DifferentialsSection />
      <IdealApplicationsSection />
      <ContractPlansSection />
      <ConsultingSection />
      <OtherServicesSection />
      <FaqSection />
    </main>
  );
}
