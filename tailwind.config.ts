import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          DEFAULT: '#ff7849', // Orange
        },
        white: {
          DEFAULT: '#FFFFFF', // Pure White
        },
      },
    },
  },
  plugins: [],
};
export default config;
