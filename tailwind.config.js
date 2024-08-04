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
      boxShadow: {
        primary: "0px 0px 10px 0px rgba(184,0,184,1)",
      },
    },
  },
  plugins: [],
};
