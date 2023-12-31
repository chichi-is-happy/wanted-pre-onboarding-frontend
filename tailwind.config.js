/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-scrollbar")],
};
