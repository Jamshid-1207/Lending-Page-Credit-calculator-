import { Button } from "@/shared/ui-kit/index";
import { ArrowRight } from "lucide-react";
import { HERO_CONTENT } from "../config";
import { scrollToForm } from "@/shared/utils/scroll";

interface HeroContentProps {
  isLoading?: boolean;
}

export const HeroContent = ({ isLoading }: HeroContentProps) => {
  return (
    <section className="max-w-3xl" aria-label="hero-title">
      <h1
        id="hero-title"
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        {HERO_CONTENT.title}
        <span className="block text-blue-200">{HERO_CONTENT.subtitle}</span>
      </h1>

      <p className="text-xl mb-8 text-blue-100 max-w-2xl">
        {HERO_CONTENT.description}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button
          isLoading={isLoading}
          variant="primary"
          className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
          onClick={() => scrollToForm("application-form")}>
          <span>{HERO_CONTENT.primaryCta}</span>
          <ArrowRight className="h-5 w-5" />
        </Button>

        <Button
          variant="outline"
          className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg"
          onClick={() => scrollToForm("calculator")}>
          {HERO_CONTENT.secondaryCta}
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {HERO_CONTENT.benefits.map((benefit) => (
          <div className="flex items-start space-x-4" key={benefit.title}>
            <div className="bg-white/20 p-3 rounded-lg">
              <benefit.Icon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">{benefit.title}</h3>
              <p className="text-blue-100">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
