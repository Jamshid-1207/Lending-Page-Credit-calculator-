import { LucideIcon } from "lucide-react";

type Benefit = {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
};

type Props = {
  benefit: Benefit;
};

export const BenefitCard = ({ benefit }: Props) => {
  const Icon = benefit.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-gray-50 to-white border border-gray-200 p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-gray-100/50 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-110 transition-transform duration-300" />

      <div className="relative z-10">
        <div
          className={`inline-flex p-3 rounded-xl bg-linear-to-r ${benefit.gradient} text-white mb-4`}>
          <Icon className="h-10 w-10" />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {benefit.title}
        </h3>

        <p className="text-gray-600">{benefit.description}</p>
      </div>
    </div>
  );
};
