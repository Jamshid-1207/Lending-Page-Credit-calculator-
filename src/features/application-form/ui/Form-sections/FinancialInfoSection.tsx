import { FormField } from "@/features/application-form/ui/FormFields";
import { inputFields } from "@/features/application-form/lib/form-config";
import { SectionProps } from "../../types";

export const FinancialInfoSection = ({ control }: SectionProps) => (
  <div className="space-y-6">
    {inputFields
      .filter((f) => f.name === "income")
      .map((field) => (
        <FormField key={field.name} field={field} control={control} />
      ))}
  </div>
);
