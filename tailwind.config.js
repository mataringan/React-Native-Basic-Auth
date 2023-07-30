/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ], // Make sure there should not be any <custom directory>, else it will not work
  theme: {
    extend: {},
  },
  plugins: [],
};
