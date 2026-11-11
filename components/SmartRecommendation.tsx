'use client'

export function SmartRecommendation() {
  return (
    <div className="relative overflow-hidden rounded-2xl p-[1px]">
      <div
        className="absolute inset-0 animate-pulse rounded-2xl bg-gradient-to-r from-[#4A5D23]/40 via-[#C1543A]/30 to-[#4A5D23]/40"
        aria-hidden="true"
      />
      <div className="relative rounded-2xl bg-[#F9F6F0] p-4">
        <p className="font-sans text-sm leading-relaxed text-[#2C2A29]">
          ✨ На основе вашего выбора: Пицца Дьявола идеально сочетается с нашим
          фирменным Лимонадом Юдзу.
        </p>
        <button
          type="button"
          className="mt-3 w-full rounded-xl bg-[#C1543A] px-4 py-2.5 font-sans text-sm font-semibold text-[#F9F6F0] transition-colors hover:bg-[#C1543A]/90"
        >
          Добавить сет
        </button>
      </div>
    </div>
  )
}
