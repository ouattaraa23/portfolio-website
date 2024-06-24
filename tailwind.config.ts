import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    extend: {
      colors: {
        primary: {
          light: '#EFD9FF',
          DEFAULT: '#cd86ff',
          dark: '#9a57cc',
        },
        secondary: {
          light: '#d6dbdc',
          DEFAULT: '#15001f',
          dark: '#0f0014',
        },
        accent: '#34004d',
      }
    },
  },
  plugins: [],
};
export default config;
