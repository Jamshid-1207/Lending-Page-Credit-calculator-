export const LoanLimitsCard = () => {
  return (
    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-1/3">
      <div className="relative">
        <div className="absolute inset-0 bg-linear-to-br from-transparent to-blue-600" />

        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 transform rotate-3">
          <div className="bg-white/20 rounded-xl p-6 mb-4">
            <div className="text-4xl font-bold">5 млн ₽</div>
            <div className="text-blue-200">Максимальная сумма</div>
          </div>

          <div className="bg-white/20 rounded-xl p-6">
            <div className="text-4xl font-bold">60 мес</div>
            <div className="text-blue-200">Максимальный срок</div>
          </div>
        </div>
      </div>
    </div>
  );
};
