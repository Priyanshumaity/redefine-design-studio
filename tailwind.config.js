/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          bg: "#FBFBFA",
          surface: "#FFFFFF",
          card: "#FFFFFF",
          border: "#E7E3DA",
          light: "#141311",
          lightSurface: "#F4F1EA",
          lightBorder: "#DDD8CF",
          gold: "#9E7D2D",
          goldLight: "#B38E38",
          goldMuted: "#8C6D24",
          mute: "#68635A",
          ink: "#141311",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      letterSpacing: {
        editorial: "0.2em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};
