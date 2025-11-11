/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base dark theme
        'dark-graphite': '#0F1115',
        'carbon': '#1A1D23',
        // Accents / status
        'neon-green': '#22C55E',
        'neon-green-hover': '#16A34A', // hover/focus state
        'cyber-red': '#EF4444',
        'cyber-red-hover': '#DC2626',
        'cool-cyan': '#38BDF8',
        'cool-cyan-hover': '#0EA5E9',
        'matrix-purple': '#7C3AED',
        'matrix-purple-hover': '#6D28D9',
        // Texts
        'text-primary': '#F8FAFC',
        'text-secondary': '#CBD5E1',
        'text-muted': '#94A3B8',
        // Backgrounds
        'bg-primary': '#0F1115',
        'bg-secondary': '#1A1D23',
        'bg-card': '#1F2229',
        // Borders
        'border-light': '#2A2E38',
        'border-dark': '#16181D',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0,0,0,0.3)',
        'glow-cyan': '0 0 8px rgba(56, 189, 248, 0.6)',
        'glow-green': '0 0 8px rgba(34, 197, 94, 0.6)',
      },
      transitionProperty: {
        'colors': 'background-color, border-color, color, fill, stroke',
      }
    },
  },
  plugins: [],
}
