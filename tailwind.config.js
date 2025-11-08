/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0F1115',
        surface: '#1A1C22',
        neon: '#22C55E',
        sky: '#38BDF8',
        purple: '#7C3AED',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(#22C55E0D 1px, transparent 1px), linear-gradient(90deg, #22C55E0D 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}