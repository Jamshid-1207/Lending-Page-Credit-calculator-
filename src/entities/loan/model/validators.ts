type Application = {
  amount: number;
  term: number;
};

export function validateLoanApplication(data: Application) {
  if (!data.amount || data.amount <= 0) {
    throw new Error("Заполните сумму кредита");
  }

  if (!data.term || data.term <= 0) {
    throw new Error("Заполните срок кредита");
  }
}
