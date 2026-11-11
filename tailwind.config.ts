import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './context/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F9F6F0',
        graphite: '#2C2A29',
        olive: '#4A5D23',
        terracotta: '#C1543A',
      },
      fontFamily: {
        serif: ['var(--font-serif-loaded)', 'Georgia', 'serif'],
        sans: ['var(--font-sans-loaded)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
      },
      boxShadow: {
        card: '0 1px 3px 0 rgb(44 42 41 / 0.08)',
      },
    },
  },
  plugins: [],
}

export default config
