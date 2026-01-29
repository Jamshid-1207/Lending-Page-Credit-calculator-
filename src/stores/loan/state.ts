import { LoanApplication } from "../../entities/loan/model/types";

export type LoanState = {
  applications: LoanApplication[];
  currentApplication: Partial<LoanApplication> | null;
  isLoading: boolean;
  error: string | null;
};

export const initialLoanState: LoanState = {
  applications: [],
  currentApplication: null,
  isLoading: false,
  error: null,
};
