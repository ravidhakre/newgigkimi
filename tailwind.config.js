import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        grotesk: ["var(--font-grotesk)", "sans-serif"],
      },
      colors: {
        primary: "#6366f1",
        "primary-dark": "#4f46e5",
        secondary: "#ec4899",
        accent: "#06b6d4",
        dark: "#0f172a",
        darker: "#020617",
        light: "#f8fafc",
        gray: "#94a3b8",
      },
      animation: {
        float: "float 20s infinite ease-in-out",
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -30px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
