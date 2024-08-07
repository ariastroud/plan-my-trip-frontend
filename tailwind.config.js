import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],

  theme: {
    extend: {
      fontFamily: {
        custom: ["Coconat", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
      },
      colors: {
        "bright-green": "#BADA55",
        "light-gray": "#d7dde4",
      },
      fontSize: {
        "12xl": "14rem",
      },
    },
  },
  plugins: [daisyui],
};
