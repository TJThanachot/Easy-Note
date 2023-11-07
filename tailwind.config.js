/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CCABD8",
        secondary: "#86e3ce",
        thirdary: "#FFDD94",
        fourthdary: "#fa8978",
        fifthdary: "#d0e6a5",
        sixthdary: "#e0ecde",
      },
    },
  },
  plugins: [],
};
