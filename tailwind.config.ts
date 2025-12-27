import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          500: '#1e3a8a',
          600: '#1e40af',
          700: '#1d4ed8',
        },
        accent: {
          500: '#d4af37',
          600: '#b8941f',
        }
      },
    },
  },
  plugins: [],
};

export default config;
