/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      screens: {
        xs: "425px",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
};
