/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-pattern': "url('../assets/background.png')",
      }
    },
  },
  fontFamily: {
    redhat: ["Red Hat Text", "sans-serif"],
  },
  plugins: [],
};
