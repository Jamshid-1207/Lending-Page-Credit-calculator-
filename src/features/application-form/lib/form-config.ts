import type { FormFieldConfig } from "../types";
import type { LoanApplicationForm } from "@/features/application-form/types";

export const INITIAL_VALUES: LoanApplicationForm = {
  firstName: "",
  lastName: "",
  phone: "+7",
  email: "",
  income: 50000,
  amount: 100000,
  term: 12,
  purpose: "",
};

export const inputFields: FormFieldConfig[] = [
  { name: "firstName", label: "Name", placeholder: "Ivan", type: "text" },
  { name: "lastName", label: "Last Name", placeholder: "Ivanov", type: "text" },
  { name: "phone", label: "Phone", placeholder: "+79991234567", type: "tel" },
  {
    name: "email",
    label: "Email",
    placeholder: "ivan@example.com",
    type: "email",
  },
  {
    name: "income",
    label: "Monthly Income",
    type: "number",
    min: 15000,
    step: 1000,
  },
  {
    name: "amount",
    label: "Loan Amount",
    type: "number",
    min: 10000,
    max: 5_000_000,
    step: 10000,
  },
  {
    name: "term",
    label: "Loan Term (months)",
    type: "number",
    min: 3,
    max: 60,
  },

  {
    name: "purpose",
    label: "Цель кредита",
    placeholder: "Например: на покупку автомобиля",
    type: "select",
    options: [
      { value: "auto", label: "Покупка автомобиля" },
      { value: "real_estate", label: "Недвижимость" },
      { value: "education", label: "Образование" },
      { value: "business", label: "На бизнес" },
      { value: "other", label: "Другое" },
    ],
  },
];
