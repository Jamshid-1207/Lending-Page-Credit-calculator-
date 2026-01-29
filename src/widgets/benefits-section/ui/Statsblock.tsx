import { stats } from "../config";

export const StatsBlock = () => {
  return (
    <div className="mt-16 bg-linear-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12">
      <div className="grid md:grid-cols-3 gap-8">
        {stats.map((stat, idx) => (
          <div key={idx} className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-700 font-medium">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
