/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FFFDF9",
        linen: "#F6F0E8",
        sand: "#EFE5DA",
        blush: "#D9C7B8",
        taupe: "#8C7765",
        cacao: "#78695D",
        espresso: "#5E5147",
      },
      fontFamily: {
        serif: ["Georgia", "Times New Roman", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(75, 64, 56, 0.06)",
        card: "0 12px 40px rgba(75, 64, 56, 0.05)",
      },
      letterSpacing: {
        editorial: "0.22em",
      },
    },
  },
  plugins: [],
};
