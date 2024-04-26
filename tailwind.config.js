const { withMaterialColors } = require("tailwind-material-colors");

/** @type {import('tailwindcss').Config} */
module.exports = withMaterialColors(
  {
    content: [
      "./components/**/*.{js,jsx,ts,tsx}",
      "./pages/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [],
    darkMode: "class",
  },
  {
    primary: "#506546",
  },
  {
    scheme: "content",
    // contrast: 0,
  }
);
