import * as yup from "yup";

export const loanApplicationSchema = yup.object().shape({
  firstName: yup
    .string()
    .trim()
    .required("Введите имя")
    .matches(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, "Только буквы"),
  lastName: yup
    .string()
    .trim()
    .required("Введите фамилию")
    .matches(/^[a-zA-Zа-яА-ЯёЁ\s-]+$/, "Только буквы"),
  phone: yup
    .string()
    .required("Введите телефон")
    .matches(/^\+7[0-9]{10}$/, "Формат: +7XXXXXXXXXX"),
  email: yup
    .string()
    .trim()
    .email("Некорректный email")
    .required("Введите email"),

  amount: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .nullable()
    .typeError("Сумма — число")
    .min(10000, "От 10 000 ₽")
    .max(5000000, "До 5 000 000 ₽")
    .required("Укажите сумму"),

  term: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .nullable()
    .typeError("Срок — число")
    .min(3, "От 3 месяцев")
    .max(60, "До 60 месяцев")
    .required("Укажите срок"),

  income: yup
    .number()
    .transform((_, val) => (val === "" ? undefined : Number(val)))
    .nullable()
    .typeError("Доход — число")
    .min(15000, "От 15 000 ₽")
    .required("Укажите доход"),

  purpose: yup
    .string()
    .trim()
    .required("Укажите цель")
    .min(5, "Минимум 5 символов"),
});
