'use client'

import Image from 'next/image'
import { Check, Plus } from 'lucide-react'
import { useState } from 'react'
import { cn } from '@/lib/utils'
import type { MenuItem } from '@/types'

interface MenuCardProps {
  item: MenuItem
  onAdd: (item: MenuItem) => void
}

export function MenuCard({ item, onAdd }: MenuCardProps) {
  const [justAdded, setJustAdded] = useState(false)

  const handleAdd = () => {
    if (item.isSoldOut) return
    onAdd(item)
    setJustAdded(true)
    window.setTimeout(() => setJustAdded(false), 1200)
  }

  return (
    <article className="flex items-center gap-4 rounded-2xl bg-white p-3 shadow-sm">
      <div className="relative size-24 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={item.image}
          alt={item.title}
          fill
          sizes="96px"
          className={cn(
            'object-cover',
            item.isSoldOut && 'grayscale opacity-50',
          )}
        />
        {item.isSoldOut && (
          <div className="absolute left-2 top-2">
            <span className="rounded-full bg-[#2C2A29] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#F9F6F0]">
              В стопе
            </span>
          </div>
        )}
      </div>

      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <h3 className="font-serif text-base font-bold leading-tight text-[#2C2A29] text-balance">
          {item.title}
        </h3>
        <p className="line-clamp-2 font-sans text-sm leading-relaxed text-[#2C2A29]/60">
          {item.description}
        </p>
        <div className="mt-1 flex items-center justify-between">
          <span className="font-sans text-sm font-bold text-[#C1543A]">
            {item.price} ₽
          </span>
          <button
            type="button"
            onClick={handleAdd}
            disabled={item.isSoldOut}
            aria-label={
              item.isSoldOut
                ? `${item.title} недоступно`
                : `Добавить ${item.title}`
            }
            className={cn(
              'flex size-9 items-center justify-center rounded-full font-sans transition-colors',
              item.isSoldOut
                ? 'cursor-not-allowed bg-[#2C2A29]/10 text-[#2C2A29]/40'
                : justAdded
                  ? 'bg-[#4A5D23] text-[#F9F6F0]'
                  : 'bg-[#C1543A] text-[#F9F6F0] hover:bg-[#C1543A]/90',
            )}
          >
            {justAdded ? (
              <Check className="size-4" aria-hidden="true" />
            ) : (
              <Plus className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </article>
  )
}
