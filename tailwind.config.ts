import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#9D5CFF",
        secondary: "#00D9FF",
        dark: {
          DEFAULT: "#0A0E27",
          lighter: "#0F1729",
        },
        darker: "#070A1C",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        heading: ["var(--font-space)"],
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #9D5CFF 0%, #00D9FF 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
