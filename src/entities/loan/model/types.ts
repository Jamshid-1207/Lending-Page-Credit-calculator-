export type LoanApplication = {
  id: string;
  amount: number;
  term: number;
  purpose: string;
  createdAt: Date;
  status: LoanStatus;
};

export type LoanStatus = "draft" | "submitted" | "approved" | "rejected";

export type SubmitLoanInput = {
  amount: number;
  term: number;
  purpose?: string;
};
