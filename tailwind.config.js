/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      bold: ["Poppins-black"],
      light: ["Poppins-light"],
    },
    backgroundSize: {
      bigger: "300% , 300%",
    },
    extend: {
      keyframes: {
        wiggle: {
          "0% , 100%": {
            "background-position": "0% , 100%",
          },

          "50%": {
            "background-position": "100% , 300%",
          }
        },
        scroll: {
          "0%": {
            left: "0%",
          },

          "100%": {
            left: "-200%",
          }
        }
      },
      animation: {
        wiggle: "wiggle 3s ease alternate infinite",
        scroll: "scroll 25s linear infinite",
      },
    },
  },
  plugins: [],
};
