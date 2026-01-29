import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLoanStore } from "@/stores/loan/index";
import { loanApplicationSchema } from "@/shared/lib/validations/loan-schema";
import { INITIAL_VALUES } from "@/features/application-form/lib/form-config";
import type { LoanApplicationForm } from "../types";
import type { SubmitLoanInput } from "@/entities/loan";

export const useApplicationForm = () => {
  const submitApplication = useLoanStore((s) => s.submitApplication);
  const isLoading = useLoanStore((s) => s.isLoading);

  const form = useForm<LoanApplicationForm>({
    defaultValues: INITIAL_VALUES,
    resolver: yupResolver(loanApplicationSchema),
    mode: "onChange",
  });

  const handleSubmit: SubmitHandler<LoanApplicationForm> = async (data) => {
    const applicationData: SubmitLoanInput = {
      amount: data.amount,
      term: data.term,
      purpose: data.purpose,
    };
    await submitApplication(applicationData);
  };

  return {
    ...form,
    handleSubmit: form.handleSubmit(handleSubmit),
    isLoading,
  };
};
