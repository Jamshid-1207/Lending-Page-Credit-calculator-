import { StateCreator } from "zustand";
import { LoanState } from "./state";
import { LoanActions } from "./types";
import { submitLoan } from "@/features/submit-loan";
import { SubmitLoanInput } from "@/entities/loan";

export const createLoanActions: StateCreator<
  LoanState & LoanActions,
  [],
  [],
  LoanActions
> = (set, get) => ({
  setApplication: (data) => {
    set((state) => ({
      currentApplication: {
        ...state.currentApplication,
        ...data,
      },
    }));
  },

  submitApplication: async () => {
    const draft = get().currentApplication;

    if (!draft?.amount || !draft?.term) {
      set({ error: "Заполните сумму и срок кредита" });
      return;
    }

    try {
      set({ isLoading: true, error: null });

      const input: SubmitLoanInput = {
        amount: draft.amount,
        term: draft.term,
        purpose: draft.purpose,
      };

      const newApplication = await submitLoan(input);

      set((state) => ({
        applications: [...state.applications, newApplication],
        currentApplication: null,
      }));
    } catch (e) {
      set({
        error: e instanceof Error ? e.message : "Не удалось отправить заявку",
      });
    } finally {
      set({ isLoading: false });
    }
  },
});
