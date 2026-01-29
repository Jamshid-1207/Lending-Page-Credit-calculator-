export const calculateMonthlyPayment = (
  amount: number,
  term: number,
  annualRate: number,
): number => {
  if (amount <= 0 || term <= 0) return 0;

  const monthlyRate = annualRate / 12;
  const factor = Math.pow(1 + monthlyRate, term);
  const rawPayment = (amount * monthlyRate * factor) / (factor - 1);

  return Math.ceil(rawPayment);
};
