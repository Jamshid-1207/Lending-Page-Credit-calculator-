"use client";

import { Button } from "@/shared/ui-kit";
import { MonthlyPayment } from "./MonthPayment/MonthPayment";
import {
  PersonalInfoSection,
  ContactInfoSection,
  FinancialInfoSection,
  LoanParametersSection,
  PurposeSection,
} from "./Form-sections";
import { useApplicationForm } from "../model/use-application-form";

export const ApplicationForm = () => {
  const { handleSubmit, control, formState, isLoading } = useApplicationForm();
  const { isValid, isSubmitted } = formState;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm">
      <h1 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Заявка на кредит
      </h1>

      <form onSubmit={handleSubmit} className="space-y-10" noValidate>
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Личные данные
          </h2>
          <PersonalInfoSection control={control} />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-5">Контакты</h2>
          <ContactInfoSection control={control} />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Финансовая информация
          </h2>
          <FinancialInfoSection control={control} />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Параметры кредита
          </h2>
          <LoanParametersSection control={control} />
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-5">
            Цель кредита
          </h2>
          <PurposeSection control={control} />
        </section>

        <section className="pt-6 border-t border-gray-200">
          <MonthlyPayment control={control} />
        </section>

        <Button
          type="submit"
          isLoading={isLoading}
          disabled={isLoading || (!isValid && isSubmitted)}
          className="w-full py-3.5 text-lg font-medium">
          Отправить заявку
        </Button>
      </form>
    </div>
  );
};
