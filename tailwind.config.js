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
        poppins: ["Poppins", "sans-serif"],
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

  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#9CB8D3",
          secondary: "#ff00ff",
          accent: "#00ffff",
          neutral: "#BADA55",
          "neutral-content": "#160016",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          info: "#0000ff",
          success: "#00ff00",
          warning: "#00ff00",
          error: "#ff0000",
        },
      },
    ],
  },
};
