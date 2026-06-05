import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#0b1d3a',
        accent: '#c49a44',
        gold: '#c49a44',
        accentLight: '#e8d3a7',
        goldLight: '#e8d3a7',
      },
      boxShadow: {
        glass: '0 24px 80px rgba(11, 29, 58, 0.14)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(circle at top left, rgba(196,154,68,0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 25%)',
      },
    },
  },
  plugins: [],
};

export default config;
