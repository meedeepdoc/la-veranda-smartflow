'use client'

import Image from 'next/image'
import { Minus, X } from 'lucide-react'
import { SmartRecommendation } from '@/components/SmartRecommendation'
import { useCart } from '@/context/CartContext'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, removeItem, clearCart, totalItems, totalPrice } = useCart()

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-30 flex justify-end">
      <button
        type="button"
        aria-label="Закрыть корзину"
        className="absolute inset-0 bg-[#2C2A29]/40"
        onClick={onClose}
      />
      <aside
        role="dialog"
        aria-label="Корзина"
        className="relative flex h-full w-full max-w-md flex-col bg-[#F9F6F0] shadow-xl"
      >
        <div className="flex items-center justify-between border-b border-[#2C2A29]/10 px-5 py-4">
          <h2 className="font-serif text-xl font-bold text-[#2C2A29]">
            Корзина
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть"
            className="flex size-9 items-center justify-center rounded-full text-[#2C2A29]/60 transition-colors hover:bg-[#2C2A29]/5"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto px-5 py-4">
          <SmartRecommendation />

          {items.length === 0 ? (
            <p className="mt-8 text-center font-sans text-sm text-[#2C2A29]/50">
              Корзина пуста
            </p>
          ) : (
            <ul className="mt-4 flex flex-col gap-3">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm"
                >
                  <div className="relative size-14 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col gap-0.5">
                    <span className="truncate font-serif text-sm font-bold text-[#2C2A29]">
                      {item.title}
                    </span>
                    <span className="font-sans text-xs text-[#2C2A29]/50">
                      {item.price} ₽ × {item.quantity}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-sm font-bold text-[#C1543A]">
                      {item.price * item.quantity} ₽
                    </span>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Убрать ${item.title}`}
                      className="flex size-8 items-center justify-center rounded-full bg-[#2C2A29]/5 text-[#2C2A29] transition-colors hover:bg-[#2C2A29]/10"
                    >
                      <Minus className="size-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {totalItems > 0 && (
          <div className="border-t border-[#2C2A29]/10 px-5 py-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="font-sans text-sm text-[#2C2A29]/60">Итого</span>
              <span className="font-serif text-lg font-bold text-[#2C2A29]">
                {totalPrice} ₽
              </span>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={clearCart}
                className="flex-1 rounded-xl border border-[#2C2A29]/15 px-4 py-2.5 font-sans text-sm font-medium text-[#2C2A29]/70 transition-colors hover:bg-[#2C2A29]/5"
              >
                Очистить
              </button>
              <button
                type="button"
                className="flex-1 rounded-xl bg-[#4A5D23] px-4 py-2.5 font-sans text-sm font-semibold text-[#F9F6F0] transition-colors hover:bg-[#4A5D23]/90"
              >
                Оформить
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  )
}
