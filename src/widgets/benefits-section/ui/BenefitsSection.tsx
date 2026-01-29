"use client";

import { benefits } from "../config";
import { BenefitCard } from "./BenefitCard";
import { StatsBlock } from "./Statsblock";

export const BenefitsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современный кредитный сервис с прозрачными условиями
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, id) => (
            <BenefitCard key={id} benefit={benefit} />
          ))}
        </div>

        <StatsBlock />
      </div>
    </section>
  );
};
