/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      height: {
        inherit: "inherit",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      fontSize: {
        "max-vw": ["max(3vw, 30px)"],
        "min-vw": ["min(5vw, 30px)"] 
      },
      transitionProperty: {
        left: "left", // Define a propriedade a ser animada como 'left'
      },
      transitionDuration: {
        200: "200ms", // Define a duração da transição como 200ms
      },
      // transitionTimingFunction: {
      //   "ease-in-out": "ease-in-out", // Adiciona a timing function ease-in-out
      // },
    },
  },
  plugins: [],
};
