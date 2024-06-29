import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      slate: {
        300: "#DAD4BB",
        400: "#CDC8B0",
        500: "#B4AF9A",
        600: "#9F9E89",
        700: "#8F8C80",
        800: "#635F54",
        900: "#4E4B42",
      },
    },
    spacing: {
      "0": "0rem",
      "4": "0.25rem",
      "8": "0.5rem",
      "12": "0.75rem",
      "16": "1.0rem",
      "24": "1.5rem",
      "32": "2.0rem",
      "48": "3.0rem",
      "64": "4.0rem",
      "96": "6.0rem",
      "128": "8.0rem",
      "192": "12.0rem",
      "256": "16.0rem",
      "384": "24.0rem",
      "512": "32.0rem",
      "640": "40.0rem",
      "768": "48.0rem",
    },
    fontSize: {
      "12": "12px",
      "14": "14px",
      "16": "16px",
      "18": "18px",
      "20": "20px",
      "24": "24px",
      "30": "30px",
      "36": "36px",
      "48": "48px",
      "60": "60px",
      "72": "72px",
    },
    letterSpacing: {
      normal: "0em",
      wide: "0.1em",
      widest: "0.2em",
    },
    boxShadow: {
      sm: "2px 2px 0px 0px rgb(0, 0, 0, 0.3)",
      lg: "4px 4px 0px 0px rgb(0, 0, 0, 0.3)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
