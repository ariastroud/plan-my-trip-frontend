import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Coconat", "sans-serif"],
      },
      colors: {
        "bright-green": "#BADA55",
      },
    },
  },
  plugins: [daisyui],
};
