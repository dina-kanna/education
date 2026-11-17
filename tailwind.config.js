/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5B4BDB",
        secondary: "#FFB547",
        dark: "#172554",
      },
    },
  },
  plugins: [],
};