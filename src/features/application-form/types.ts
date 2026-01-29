import { Control } from "react-hook-form";

export type LoanApplicationForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  income: number;
  amount: number;
  term: number;
  purpose: string;
  annualRate?: number;
};

export type FieldType = "text" | "email" | "tel" | "number";

export type SelectOption = {
  value: string;
  label: string;
};

type BaseFieldConfig = {
  name: keyof LoanApplicationForm;
  label: string;
  placeholder?: string;
};

export type InputFieldConfig = BaseFieldConfig & {
  type: FieldType;
  min?: number;
  max?: number;
  step?: number;
};

export type SelectFieldConfig = BaseFieldConfig & {
  type: "select";
  options: SelectOption[];
};

export type FormFieldConfig = InputFieldConfig | SelectFieldConfig;

export type FormFieldProps = {
  field: FormFieldConfig;
  control: Control<LoanApplicationForm>;
};

export type FormFieldsProps = {
  fields: FormFieldConfig[];
  control: Control<LoanApplicationForm>;
  cols?: number;
};

export type SectionProps = {
  control: Control<LoanApplicationForm>;
};
