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
      lightYellow: 'rgba(255, 178, 30, 0.1)',
      white: '#FFFFFF',
      red: '#FF5555',
      lightRed: 'rgba(255, 85, 85, 0.1)',
      green: '#00BB8F',
      lightGreen: 'rgba(0, 187, 143, 0.1)',
      blue: '#1125D6',
      lightBlue: 'rgba(17, 37, 214, 0.1)',
      darkBlue: '#303B59',
      lightPurple: '#CAC9FF',
      veryLightBlue: '#ECF2FF',
    },
    backgroundImage: {
      darkBlueGradient:
        'linear-gradient(180deg, #4D21C9 0%, rgba(37, 33, 201, 0) 100%, rgba(37, 33, 201, 0) 100%)',
      blueGradient:
        'linear-gradient(180deg, #7755FF 0%, #6943FF 0.01%, #2F2CE9 100%)',
    },
  },
  plugins: [],
};
export default config;
