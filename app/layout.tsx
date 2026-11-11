import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import { CartProvider } from '@/context/CartContext'
import './globals.css'

const _playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-serif-loaded',
  display: 'swap',
})
const _montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-sans-loaded',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'La Veranda | Меню',
  description:
    'La Veranda — премиальное меню итальянского ресторана. Закуски, паста, пицца из печи и авторский бар в атмосфере dolce far niente.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f9f6f0',
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ru"
      className={`bg-background ${_playfair.variable} ${_montserrat.variable}`}
    >
      <body className="antialiased font-sans text-[#2C2A29]">
        <CartProvider>{children}</CartProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
