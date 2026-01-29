import { forwardRef } from "react";
import clsx from "clsx";
import type { InputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, isInvalid, errorMessage, className, ...props }, ref) => {
    return (
      <div className="space-y-1">
        {label && (
          <label
            htmlFor={props.id}
            className="block text-md font-medium text-gray-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          autoComplete="off"
          onWheel={(e) => e.preventDefault()}
          {...props}
          className={clsx(
            "block px-3 py-3 w-full rounded-md border shadow-sm focus:outline-none focus:ring-2",
            isInvalid
              ? "border-red-500 focus:ring-red-500"
              : "border-gray-300 focus:ring-blue-500",
            className,
          )}
        />

        {errorMessage && <p className="text-sm text-red-600">{errorMessage}</p>}
      </div>
    );
  },
);

Input.displayName = "Input";
