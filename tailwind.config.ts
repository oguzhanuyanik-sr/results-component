import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      yellow: '#FFB21E',
      white: '#FFFFFF',
      red: '#FF5555',
      green: '#00BB8F',
      blue: '#1125D6',
      darkBlue: '#303B59',
      lightBlue: '#CAC9FF',
      veryLightBlue: '#ECF2FF',
    },
    fontFamily: {
      space: 'var(--font-space)',
      lexend: 'var(--font-lexend)',
    },
    boxShadow: {},
    container: {
      center: true,
      padding: '4rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
