import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'selector',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-100': '#1DA1F2',
        'primary-300': '#5A98BF',
        'secondary-100': '#5e5d5d',
        'secondary-300': '#252525',
        'secondary-500': '#0D0D0D',
        'font-100': '#FCFCFC',
      },
      opacity: {
        '14': '.14',
      },
      screens: {
        xs: '480px',
        sm: '768px',
        md: '1060px',
      },
    },
  },
  plugins: [],
};
export default config;
