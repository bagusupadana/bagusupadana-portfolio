import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        "bg-soft": "var(--bg-soft)",
        paper: "var(--paper)",
        ink: "var(--ink)",
        graphite: "var(--graphite)",
        line: "var(--line)",
        "line-strong": "var(--line-strong)",
        accent: "var(--accent)",
        "accent-2": "var(--accent-2)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Arial Narrow", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wrap: "1240px",
      },
      keyframes: {
        rise: {
          "0%": { transform: "translateY(105%)" },
          "100%": { transform: "translateY(0)" },
        },
        fade: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        pulse2: {
          "0%": { boxShadow: "0 0 0 0 var(--accent-ring)" },
          "70%": { boxShadow: "0 0 0 9px transparent" },
          "100%": { boxShadow: "0 0 0 0 transparent" },
        },
      },
      animation: {
        rise: "rise .9s cubic-bezier(.16,1,.3,1) forwards",
        fade: "fade .8s ease forwards",
        pulse2: "pulse2 2.6s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
