import { SubmitLoanInput, LoanApplication } from "@/entities/loan/model/types";

export type LoanState = {
  applications: LoanApplication[];
  currentApplication: Partial<LoanApplication> | null;
  isLoading: boolean;
  error: string | null;
};

export type LoanActions = {
  setApplication: (data: Partial<LoanApplication>) => void;
  submitApplication: (formData: SubmitLoanInput) => Promise<void>;
  fetchApplications?: () => Promise<void>;
};

export type LoanStore = LoanState & LoanActions;
