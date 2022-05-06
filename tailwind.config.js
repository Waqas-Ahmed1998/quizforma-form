const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        slide: {
          "0%": { transform: "translatex(0)", opacity: 0 },
          " 100%": { transform: "translatex(7px)", opacity: 1 },
        },
        opacity: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        wiggle: "wiggle 3s ease-in-out infinite",
        slide: "slide 1s ease-in-out infinite",
        opacity: "opacity 0.2s  ease-in ",
      },
    },
    screens: {
      xs: "319px",
      iphone6: "370px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/forms"),
  ],
  variants: {
    scrollbar: ["rounded,dark"],
  },
};
