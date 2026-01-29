import { Slider } from "@/shared/ui-kit";

type Props = {
  term: number;
  setTerm: (value: number) => void;
};

export const LoanTermSection = ({ term, setTerm }: Props) => {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <label className="text-sm font-medium text-gray-700">
          Срок кредита
        </label>
        <span className="text-lg font-semibold text-blue-600">
          {term} месяцев
        </span>
      </div>

      <Slider
        min={3}
        max={60}
        step={1}
        value={[term]}
        onValueChange={([newValue]) => setTerm(newValue)}
      />

      <div className="flex justify-between text-sm text-gray-500 mt-1">
        <span>3 месяца</span>
        <span>60 месяцев</span>
      </div>
    </div>
  );
};
