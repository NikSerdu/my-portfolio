/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#b21eb2",
        black: "#131313",
        grey: "#a1a1a1",
      },
    },
  },
  plugins: [],
};
