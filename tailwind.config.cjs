/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      "open-sans": ['"Inter", "sans-serif"'],
    },

    extend: {
      fontSize: {
        16: "16px",
        20: "20px",
      },
      boxShadow: {
        blur: "0 0 10px 4px  rgba(255, 255, 255, 0.2)",
      },
      backgroundColor: {
        Nau: "#Grey",
      },
      colors: {
        "dark-primary": "#000",
        secondary: "#00f6ff",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "400px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
  ...{ cssnano: {} },
};
