import { LoanApplication, validateLoanApplication } from "@/entities/loan";

type submitLoanInput = {
  amount: number;
  term: number;
  purpose?: string;
};

export async function submitLoan(
  formData: submitLoanInput,
): Promise<LoanApplication> {
  validateLoanApplication(formData);

  await new Promise((r) => setTimeout(r, 1000));

  return {
    id: crypto.randomUUID(),
    amount: formData.amount,
    term: formData.term,
    purpose: formData.purpose ?? "",
    status: "submitted",
    createdAt: new Date(),
  };
}
