/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgb(37, 147, 255)", // 원하는 RGB 값
        customGray: "rgba(250, 250, 252, .8)",
      },
    },
  },
  plugins: [],
};
