import { FormField } from "@/features/application-form/ui/FormFields";
import { inputFields } from "@/features/application-form/lib/form-config";
import { SectionProps } from "../../types";

export const PurposeSection = ({ control }: SectionProps) => {
  const purposeField = inputFields.find((f) => f.name === "purpose");

  if (!purposeField) return null;

  return (
    <div className="space-y-2">
      <FormField field={purposeField} control={control} />
    </div>
  );
};
