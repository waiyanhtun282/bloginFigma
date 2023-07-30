// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
        "2xl": "5rem",
      },
    },
    fontFamily: {
      pnormal: ["poppins_normal", "sans-serif"],
      psemibold: ["poppins_semiBold", "sans-serif"],
      pbold: ["poppins_bold", "sans-serif"],
    },
    colors:{
      h_600:"#3B3C4A",
      h_400:"#A1A1AA",
      h_500:"#696A75",
      h_100:"#E8E8EA",
      h_800:"#181A2A",
      h_900:"#141624",
      p_blue:"#4B6BFB",
      white:"#FFF",
      dar :"#242535",
      _dark:"#181A2A",
    }
  },
  plugins: [],
}

