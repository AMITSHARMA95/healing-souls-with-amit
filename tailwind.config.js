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
        'dark-card': '#121214',
        'dark-border': 'rgba(255,255,255,0.08)',
        'dark-hover': '#1a1a1e',
        'accent-gold': '#C6A664',
        'accent-blue': '#3b5998',
        'text-light': '#F5F5F5',
        'text-muted': '#A1A1AA',
        'text-secondary': '#6F7785',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'ui-serif', 'serif'],
        'display': ['Playfair Display', 'Georgia', 'serif'],
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '20px',
      },
    },
  },
  plugins: [],
}
