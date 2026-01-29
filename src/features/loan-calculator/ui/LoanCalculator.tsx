"use client";

import { useState } from "react";
import { useLoanStore } from "@/stores/loan/index";
import { Button } from "@/shared/ui-kit";
import { calculateMonthlyPayment } from "@/shared/lib/finance/calculateMonthlyPayment";
import { LoanAmountSection } from "./LoanAmountSection";
import { LoanTermSection } from "./LoanTermSection";
import { LoanSummary } from "./LoanSummary";

export const LoanCalculator = () => {
  const [amount, setAmount] = useState(100000);
  const [term, setTerm] = useState(12);
  const annualRate = 0.12;

  const monthlyPayment = calculateMonthlyPayment(amount, term, annualRate);
  const totalAmount = monthlyPayment * term;
  const overpayment = totalAmount - amount;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Кредитный калькулятор{annualRate * 100}%
      </h2>

      <div className="space-y-6">
        <LoanAmountSection amount={amount} setAmount={setAmount} />
        <LoanTermSection term={term} setTerm={setTerm} />
        <LoanSummary
          monthlyPayment={monthlyPayment}
          totalAmount={totalAmount}
          overpayment={overpayment}
        />

        <Button
          className="w-full py-3"
          onClick={() =>
            useLoanStore.getState().setApplication({ amount, term })
          }>
          Подать заявку
        </Button>
      </div>
    </div>
  );
};
