"use client";
import { HeroContent } from "./HeroContent";
import { LoanLimitsCard } from "./LoanlimitsCard";

export const HeroSection: React.FC = () => {
  return (
    <section
      className="relative overflow-hidden bg-linear-to-br from-blue-600 to-blue-800 text-white"
      style={{ height: "800px" }}>
      <div className="absolute inset-0 bg-black opacity-10" />

      <div className="relative container mx-auto px-4 py-16 md:py-24">
        <HeroContent isLoading={false} />

        <LoanLimitsCard />
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,138.7C960,139,1056,181,1152,197.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};
