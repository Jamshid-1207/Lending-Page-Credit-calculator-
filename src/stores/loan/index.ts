import { create } from "zustand";
import { persist } from "zustand/middleware";
import { initialLoanState } from "./state";
import { createLoanActions } from "./actions";
import { LoanStore } from "@/stores/loan/types";

export const useLoanStore = create<LoanStore>()(
  persist(
    (set, get, api) => ({
      ...initialLoanState,
      ...createLoanActions(set, get, api),
    }),
    {
      name: "loan-storage",
      version: 1,
      migrate: (persistedState) => {
        return persistedState ?? initialLoanState;
      },
      partialize: (state) => ({
        applications: state.applications,
        currentApplication: state.currentApplication,
      }),
    },
  ),
);
