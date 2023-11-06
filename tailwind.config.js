/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E8971F",
      },
      backgroundColor: {
        primary: "#FFF7EC",
      },
    },
  },
  plugins: [],
};
