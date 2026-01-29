import { Slider } from "@/shared/ui-kit";
import { formatNumber } from "@/shared/utils/format";

type Props = {
  amount: number;
  setAmount: (value: number) => void;
};

export const LoanAmountSection = ({ amount, setAmount }: Props) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">
          Сумма кредита
        </label>
        <span className="text-lg font-semibold text-blue-600">
          {formatNumber(amount)} ₽
        </span>
      </div>

      <Slider
        min={10000}
        max={5000000}
        step={10000}
        value={[amount]}
        onValueChange={([newValue]) => setAmount(newValue)}
      />

      <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>{formatNumber(10000)} ₽</span>
        <span>{formatNumber(5000000)} ₽</span>
      </div>
    </div>
  );
};
