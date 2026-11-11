import type { MenuItem } from '@/types'

export const menuItems: MenuItem[] = [
  {
    id: 'vitello-tonnato',
    title: 'Вителло Тоннато',
    price: 850,
    description:
      'Тонкие лепестки нежной телятины под бархатным соусом из тунца.',
    image: '/vitello.jpg',
    isSoldOut: false,
  },
  {
    id: 'pizza-quattro-formaggi',
    title: 'Пицца 4 Сыра',
    price: 950,
    description:
      'Сметанная основа, итальянская горгонзола, копчёный сулугуни, моцарелла и грана падано.',
    image: '/pizza.jpg',
    isSoldOut: false,
  },
  {
    id: 'beef-cheeks',
    title: 'Томленые говяжьи щечки',
    price: 1200,
    description:
      'Тающее мясо долгого томления в красном вине с картофельным пюре.',
    image: '/cheeks.jpg',
    isSoldOut: true,
  },
  {
    id: 'yuzu-lemonade',
    title: 'Лимонад Юдзу-Клубника',
    price: 450,
    description:
      'Освежающий микс японского цитруса и сладкой локальной клубники.',
    image: '/yuzu.jpg',
    isSoldOut: false,
  },
]
