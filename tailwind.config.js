/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : {
        center: true,
        padding : "5px",
      },
      fontFamily: {
        primary : [ 'Poppins', 'sans-serif'],
      },
      colors: {
        primary : "#FA381D",
        secondary : "#222222",
      },
    },
  },
  plugins: [],
}

