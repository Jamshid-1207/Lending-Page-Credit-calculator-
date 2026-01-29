import { HeroSection } from "@/widgets/hero";
import { LoanCalculator } from "@/features/loan-calculator";
import { BenefitsSection } from "@/widgets/benefits-section";
import { ApplicationForm } from "@/features/application-form";
import "@/app/globals.css";

export default function HomePage() {
  return (
    <div className="min-h-screen from-gray-50 to-white">
      <HeroSection />

      <section id="calculator" className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <LoanCalculator />
        </div>
      </section>

      <BenefitsSection />

      <section id="application-form" className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <ApplicationForm />
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© Все права защищены.</p>
          <p className="text-gray-400 text-sm mt-2">
            Лицензия ЦБ РФ № 123456 от 01.01.2025
          </p>
        </div>
      </footer>
    </div>
  );
}
