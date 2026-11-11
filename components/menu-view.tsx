'use client'

import { useState } from 'react'
import { CartDrawer } from '@/components/CartDrawer'
import { Header } from '@/components/Header'
import { MenuCard } from '@/components/MenuCard'
import { useCart } from '@/context/CartContext'
import { menuItems } from '@/lib/data'

export function MenuView() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { addItem } = useCart()

  return (
    <div className="min-h-screen bg-[#F9F6F0]">
      <Header onCartOpen={() => setIsCartOpen(true)} />
      <main className="mx-auto max-w-md px-5 pb-24 pt-6">
        <h1 className="mb-1 font-serif text-2xl font-bold text-[#2C2A29]">
          Меню
        </h1>
        <p className="mb-6 font-sans text-sm text-[#2C2A29]/50">
          Итальянская кухня в атмосфере dolce far niente
        </p>
        <section
          aria-label="Блюда"
          className="flex flex-col gap-3"
        >
          {menuItems.map((item) => (
            <MenuCard key={item.id} item={item} onAdd={addItem} />
          ))}
        </section>
      </main>
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  )
}
