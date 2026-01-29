import React from "react";
import { Loader2 } from "lucide-react";
import type { ButtonProps } from "./types";
import clsx from "clsx";

const variants = {
  primary: "bg-blue-600 text-white hover:bg-blue-700",
  secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
  outline: "border border-gray-300 hover:bg-gray-50",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  variant = "primary",
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={clsx(
        "px-4 py-2 rounded-md font-medium transition-colors flex items-center justify-center gap-2",
        variants[variant],
        isLoading && "opacity-70 cursor-not-allowed",
        className,
      )}>
      {isLoading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          Загрузка...
        </>
      ) : (
        children
      )}
    </button>
  );
};
