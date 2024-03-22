/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      
      sm: "350px",

      md: "585px",

      lg: "768px",

      xl: "1024px",

      "2xl": "1440px",
      "3xl": "1540px",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
