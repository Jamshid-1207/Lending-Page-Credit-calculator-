import { Control, FieldValues, Path } from "react-hook-form";
import { ReactNode } from "react";

export type SelectOption = {
  value: string;
  label: string;
};

export type CustomSelectProps<T extends FieldValues> = {
  name: Path<T>;
  label?: string;
  options: SelectOption[];
  control: Control<T>;
  className?: string;
  placeholder?: string;
  renderOption?: (option: SelectOption, isSelected: boolean) => ReactNode;
  renderTrigger?: (value: string, isOpen: boolean) => ReactNode;
  disabled?: boolean;
};
