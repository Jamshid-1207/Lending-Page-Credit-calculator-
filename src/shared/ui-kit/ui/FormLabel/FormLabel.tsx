import { ComponentPropsWithoutRef } from "react";

interface FormLabelProps extends ComponentPropsWithoutRef<"label"> {
  label: string;
  htmlFor?: string;
  required?: boolean;
}

export function FormLabel({
  label,
  htmlFor,
  required = false,
  className = "",
  ...props
}: FormLabelProps) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-sm font-medium text-gray-700 ${className}`}
      {...props}>
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );
}
