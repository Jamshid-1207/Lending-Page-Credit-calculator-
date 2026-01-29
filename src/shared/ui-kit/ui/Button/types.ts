export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  disabled?: boolean;
};
