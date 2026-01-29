"use client";

import clsx from "clsx";
import { useState, useRef } from "react";
import { useController, FieldValues } from "react-hook-form";
import { useClickOutside } from "@/shared/lib/hooks/useClickOutside";
import { getSelectedLabel } from "@/shared/utils/select";
import type { CustomSelectProps } from "./types";
import { SelectOptionsList } from "./SelectOPtions/SelectOptions";
import { FormLabel } from "../FormLabel/FormLabel";

export const Select = <T extends FieldValues>({
  name,
  label,
  options,
  control,
  placeholder = "Выберите...",
  disabled = false,
  required = false,
}: CustomSelectProps<T> & { required?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const { field, fieldState } = useController({
    name,
    control,
  });

  useClickOutside(selectRef, () => setIsOpen(false));

  const handleSelect = (value: string) => {
    field.onChange(value);
    setIsOpen(false);
  };

  const selectedLabel = getSelectedLabel(options, field.value, placeholder);

  const labelId = `${name}-label`;
  const listboxId = `${name}-listbox`;

  return (
    <div className="space-y-1 relative" ref={selectRef}>
      {label && (
        <FormLabel
          label={label}
          htmlFor={name}
          required={required}
          id={labelId}
        />
      )}

      <div
        id={name}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-labelledby={labelId}
        tabIndex={disabled ? -1 : 0}
        onClick={() => !disabled && setIsOpen((prev) => !prev)}
        className={clsx(
          "cursor-pointer bg-white border rounded-md p-3 w-full flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500",
          fieldState.error ? "border-red-500" : "border-gray-300",
        )}>
        <span className={clsx(!field.value && "text-gray-400")}>
          {selectedLabel}
        </span>
        <span
          className={clsx(
            "transition-transform text-gray-500",
            isOpen && "rotate-180",
          )}
          aria-hidden="true">
          ▼
        </span>
      </div>

      {isOpen && (
        <SelectOptionsList
          isOpen={isOpen}
          options={options}
          selectedValue={field.value}
          onSelect={handleSelect}
          listboxId={listboxId}
          labelId={labelId}
        />
      )}

      {fieldState.error && (
        <p className="text-sm text-red-600" role="alert">
          {fieldState.error?.message}
        </p>
      )}
    </div>
  );
};
