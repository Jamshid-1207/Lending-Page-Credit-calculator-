"use client";

import { useMemo } from "react";
import { Control, useWatch } from "react-hook-form";
import { calculateMonthlyPayment } from "@/shared/lib/finance/calculateMonthlyPayment";
import { LoanApplicationForm } from "../../types";

type MonthlyPaymentProps = {
  control: Control<LoanApplicationForm>;
};

export function MonthlyPayment({ control }: MonthlyPaymentProps) {
  const amount = useWatch({ control, name: "amount" }) ?? 100_000;
  const term = useWatch({ control, name: "term" }) ?? 12;
  const annualRate = useWatch({ control, name: "annualRate" }) ?? 0.12;

  const monthlyPayment = useMemo(() => {
    if (amount <= 0 || term <= 0) {
      return null;
    }

    return calculateMonthlyPayment(amount, term, annualRate);
  }, [amount, term, annualRate]);

  return (
    <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
      <h3 className="font-semibold text-blue-900 mb-2 text-lg">
        Предварительный расчёт
      </h3>

      {monthlyPayment === null ? (
        <p className="text-blue-500 text-sm">
          Введите сумму и срок кредита для расчёта платежа
        </p>
      ) : (
        <p className="text-blue-700 text-lg">
          Ежемесячный платёж:{" "}
          <strong>{monthlyPayment.toLocaleString("ru-RU")} ₽</strong>
        </p>
      )}
    </div>
  );
}
