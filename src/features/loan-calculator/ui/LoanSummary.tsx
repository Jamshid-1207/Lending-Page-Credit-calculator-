import { formatCurrency } from "@/shared/utils/format";

type Props = {
  monthlyPayment: number;
  totalAmount: number;
  overpayment: number;
};

export const LoanSummary = ({
  monthlyPayment,
  totalAmount,
  overpayment,
}: Props) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-600">Ежемесячный платеж:</span>
        <span className="text-xl font-bold text-green-600">
          {formatCurrency(monthlyPayment)}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">Общая сумма выплат:</span>
        <span className="text-lg font-semibold">
          {formatCurrency(totalAmount)}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-600">Переплата:</span>
        <span className="text-lg font-semibold">
          {formatCurrency(overpayment)}
        </span>
      </div>
    </div>
  );
};
