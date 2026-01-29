import { FormField } from "@/features/application-form/ui/FormFields";
import { inputFields } from "@/features/application-form/lib/form-config";
import { SectionProps } from "../../types";

export const LoanParametersSection = ({ control }: SectionProps) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {inputFields
      .filter((f) => ["amount", "term"].includes(f.name))
      .map((field) => (
        <FormField key={field.name} field={field} control={control} />
      ))}
  </div>
);
