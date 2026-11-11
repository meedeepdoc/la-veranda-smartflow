'use client'

import Image from 'next/image'
import { ShoppingBag } from 'lucide-react'
import { useCart } from '@/context/CartContext'

interface HeaderProps {
  onCartOpen: () => void
}

export function Header({ onCartOpen }: HeaderProps) {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-20 border-b border-[#2C2A29]/10 bg-[#F9F6F0]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-md items-center justify-between px-5 py-4">
        <div className="flex flex-col gap-0.5">
          <Image
            src="/logo.png"
            alt="La Veranda"
            width={120}
            height={32}
            className="h-7 w-auto object-contain object-left"
            priority
          />
          <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-[#2C2A29]/50">
            Cucina Italiana
          </span>
        </div>
        <button
          type="button"
          onClick={onCartOpen}
          aria-label={`Корзина, ${totalItems} товаров`}
          className="relative flex size-11 items-center justify-center rounded-full bg-white text-[#2C2A29] shadow-sm transition-colors hover:bg-[#F9F6F0]"
        >
          <ShoppingBag className="size-5" aria-hidden="true" />
          {totalItems > 0 && (
            <span
              className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#C1543A] font-sans text-[11px] font-semibold text-[#F9F6F0]"
              aria-hidden="true"
            >
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </header>
  )
}
