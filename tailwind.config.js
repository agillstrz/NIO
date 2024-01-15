/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FE3C33",
        primary2: "#D37040",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans"],
      },
    },
  },
  plugins: [],
};
