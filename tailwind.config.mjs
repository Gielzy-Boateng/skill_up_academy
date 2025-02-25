/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollBehavior: ["smooth"],
      backgroundImage: {
        customGradient:
          "linear-gradient(-45deg, #ee7752, #ff006275, #23a6d5, #23d5ab)",
        // navGradient: "linear-gradient(-45deg, #FF5722, #B8E6C1, #f37244)",
        // navGradient:
        //   "linear-gradient(-45deg, #FF5722, #FF8A50, #F37244, #E65100)",
        navGradient:
          "linear-gradient(-45deg, #ee7752, #ff006275, #FF5722, #23d5ab)",
      },

      backgroundSize: {
        customSize: "400% 400%",
      },
      keyframes: {
        colorBlend: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        customAnimation: "colorBlend 9s ease infinite",
      },

      // colors: {
      //   background: "var(--background)",
      //   foreground: "var(--foreground)",
      // },
    },
  },
  plugins: [],
};

// backgroundImage: {
//   linearGradient:
//     "linear-gradient(-45deg, #ee7752, #ff006275, #23a6d5, #23d5ab)",
//   aboutGradient: "linear-gradient(45deg, #06bae4, #b9d644, #f37244)",
// },

// keyframes: {
//   gradient: {
//     "0%": { backgroundPosition: "0% 50%" },
//     "50%": { backgroundPosition: "100% 50%" },
//     "100%": { backgroundPosition: "0% 50%" },
//   },
// },
// animation: {
//   gradient: "gradient 9s ease infinite",
// },
// backgroundSize: {
//   "size-200": "400% 400%",
// },
// },

{
  /* <div className="overflow-scroll grid grid-rows-[auto_1fr_auto] bg-size-200 w-screen bg-linearGradient animate-gradient z-40 transition duration-300 mt-0 mb-0 overflow-x-hidden"> */
}
