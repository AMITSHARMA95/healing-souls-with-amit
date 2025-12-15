/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#0B0B0C',
        'dark-card': '#1A1A1B',
        'dark-border': '#2A2A2B',
        'dark-hover': '#252526',
        'accent-gold': '#D4AF37',
        'accent-rose': '#E8B4B8',
        'text-light': '#F0EEEB',
        'text-muted': '#A89968',
        'text-secondary': '#8B8680',
        'text-heading': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'ui-serif', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      spacing: {
        'xs': '8px',
        'sm': '12px',
        'md': '16px',
        'lg': '24px',
        'xl': '32px',
        '2xl': '48px',
        '3xl': '64px',
      },
      animation: {
        'gradient-shift': 'gradient-shift 12s ease-in-out infinite',
        'float': 'float 8s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { opacity: '0.04', transform: 'translateY(0px)' },
          '50%': { opacity: '0.08', transform: 'translateY(-30px)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(212, 175, 55, 0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(212, 175, 55, 0.2)' },
        },
        'shimmer': {
          '0%, 100%': { backgroundPosition: '200% 50%' },
          '50%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
