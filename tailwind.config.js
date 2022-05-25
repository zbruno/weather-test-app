const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  important: true,
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
