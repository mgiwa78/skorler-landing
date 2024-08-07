import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bahnschrift: ["Bahnschrift", "sans-serif"],
        switzer: ["Switzer", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        customGreen: "#3ADC90",
        primary: {
          light: "#A4F3C4",
          DEFAULT: "#0085ff",
          dark: "#2A9D68",
          disabled: "#E6F8EF",
          transparent: "rgba(58, 220, 144, 0.5)",
        },
        surface: {
          light: "#FAFCFE",
          lighter: "#F6FAFD",
        },
        borderColor: {
          light: "#E2E8F0",
        },
        textColor: {
          primary: "#1F2937", // Example primary text color (dark grey)
          secondary: "#4B5563", // Example secondary text color (grey)
          caption: "#9CA3AF", // Example caption text color (light grey)
          negative: "#D1D5DB", // Example negative text color (very light grey)
          disabled: "#E5E7EB", // Example disabled text color (lightest grey)
        },
      },
    },
  },
  plugins: [],
};
export default config;
