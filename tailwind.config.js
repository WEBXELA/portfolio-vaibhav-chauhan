module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      colors: {
        gold: '#c9a84c',
        'gold-light': '#e8c96e',
        'bg-dark': '#0a0a0a',
      },
    },
  },
  plugins: [],
};
