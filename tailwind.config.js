/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      lm: "375px",
      lmm: "425px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1536px",
      "2xl": "1280px",
      laptop: "1440px",
      large: "1880px",
    },
    extend: {
      fontFamily: {
        plexSans: ["IBM Plex Sans", "sans-serif"],
        plexSerif: ["IBM Plex Serif", "sans-serif"],
      },
    },
  },
  plugins: [],
};
