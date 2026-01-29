import clsx from "clsx";

type SelectOptionsListProps = {
  isOpen: boolean;
  options: Array<{ value: string; label: string }>;
  selectedValue: string | undefined;
  onSelect: (value: string) => void;
  listboxId?: string;
  labelId?: string;
};

export const SelectOptionsList = ({
  isOpen,
  options,
  selectedValue,
  onSelect,
  listboxId,
  labelId,
}: SelectOptionsListProps) => {
  if (!isOpen) return null;

  return (
    <ul
      id={listboxId}
      aria-labelledby={labelId}
      role="listbox"
      className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md max-h-60 overflow-auto shadow-lg">
      {options.map((opt) => (
        <li
          key={opt.value}
          role="option"
          aria-selected={selectedValue === opt.value}
          onClick={() => onSelect(opt.value)}
          className={clsx(
            "px-3 py-2 cursor-pointer transition-colors",
            selectedValue === opt.value
              ? "bg-blue-500 text-white"
              : "hover:bg-blue-50",
          )}>
          {opt.label}
        </li>
      ))}
    </ul>
  );
};
