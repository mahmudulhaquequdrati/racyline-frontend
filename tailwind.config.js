/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#339E9F",
        secondary: "#339E9F",
      },
      backgroundColor: {
        primary: "#E0FCFD",
        secondary: "#339E9F",
      },
      borderColor: {
        primary: "#339E9F", // Replace with your custom color and class name
      },
    },
  },
  // plugins: [require("flowbite/plugin")],
};
