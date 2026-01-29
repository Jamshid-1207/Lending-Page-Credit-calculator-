import {
  CheckCircle,
  Zap,
  CreditCard,
  FileText,
  Users,
  Globe,
} from "lucide-react";

export const benefits = [
  {
    icon: Zap,
    id: 1,
    title: "Мгновенное решение",
    description:
      "Автоматическое одобрение заявки за 15 минут без посещения офиса",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: CheckCircle,
    id: 2,
    title: "Без справок",
    description: "Не нужно подтверждать доход справкой 2-НДФЛ",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: CreditCard,
    id: 3,
    title: "Любая карта",
    description: "Получите деньги на любую банковскую карту РФ",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    id: 4,
    title: "Минимум документов",
    description: "Только паспорт и второй документ на выбор",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    id: 5,
    title: "Совместная заявка",
    description: "Увеличьте шансы на одобрение с созаемщиком",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Globe,
    id: 6,
    title: "Онлайн-сервис",
    description: "Весь процесс от заявки до получения денег онлайн",
    gradient: "from-rose-500 to-pink-500",
  },
] as const;

export const stats = [
  { value: "12%", label: "Минимальная ставка" },
  { value: "15 мин", label: "Среднее время одобрения" },
  { value: "99%", label: "Удовлетворенных клиентов" },
] as const;
