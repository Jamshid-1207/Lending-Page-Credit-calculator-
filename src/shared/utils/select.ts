export type SelectOption = {
  value: string;
  label: string;
};

export const getSelectedLabel = (
  options: SelectOption[],
  value?: string,
  placeholder = "Выберите...",
): string => {
  return options.find((opt) => opt.value === value)?.label ?? placeholder;
};
