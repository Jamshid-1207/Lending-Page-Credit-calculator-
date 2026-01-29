export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  isInvalid?: boolean;
  errorMessage?: string;
};
