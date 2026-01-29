import { Control, Controller } from "react-hook-form";
import { Input, Select } from "@/shared/ui-kit";
import type {
  FormFieldConfig,
  SelectFieldConfig,
  LoanApplicationForm,
} from "../types";

function isSelectField(field: FormFieldConfig): field is SelectFieldConfig {
  return field.type === "select";
}

type FormFieldProps = {
  field: FormFieldConfig;
  control: Control<LoanApplicationForm>;
};

export const FormField: React.FC<FormFieldProps> = ({ field, control }) => {
  if (isSelectField(field)) {
    return (
      <Select
        name={field.name}
        label={field.label}
        options={field.options}
        control={control}
      />
    );
  }

  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: rhfField, fieldState }) => (
        <Input
          {...rhfField}
          type={field.type}
          label={field.label}
          min={field.min}
          max={field.max}
          step={field.step}
          placeholder={field.placeholder}
          isInvalid={!!fieldState.error}
          errorMessage={fieldState.error?.message}
        />
      )}
    />
  );
};
