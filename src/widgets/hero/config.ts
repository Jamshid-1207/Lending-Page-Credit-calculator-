import { Clock, Shield, Percent } from "lucide-react";

export const HERO_CONTENT = {
  title: "Кредиты для ваших целей",
  subtitle: "быстро и выгодно",

  description:
    "Получите кредит до 5 000 000 ₽ под 12% годовых. Решение за 15 минут. Без скрытых комиссий.",

  primaryCta: "Получить кредит",
  secondaryCta: "Рассчитать кредит",

  benefits: [
    {
      title: "Быстро",
      description: "Решение за 15 минут",
      Icon: Clock,
    },
    {
      title: "Выгодно",
      description: "От 12% годовых",
      Icon: Percent,
    },
    {
      title: "Надежно",
      description: "Лицензия ЦБ РФ",
      Icon: Shield,
    },
  ],
};
