import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#F7F9FD",
        ink: "#0F1B3D",
        mut: "#93A0C0",
        tx: "#4B5878",
        line: "#E2E8F5",
        nav: "#0F1B3D",
        accent: "#5B74F0",
        "accent-2": "#4A63D8",
        "icon-bg": "#E8EEFF",
        "icon-stroke": "#4F6BEA",
      },
      fontFamily: {
        sans: ["var(--font-figtree)", "system-ui", "-apple-system", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(120deg, #F5A26B,#B98CF6 55%,#6EA8FF)",
      },
      boxShadow: {
        card: "0 1px 2px rgba(15,27,61,.04), 0 24px 48px -34px rgba(15,27,61,.24)",
        "card-hover": "0 1px 2px rgba(15,27,61,.04), 0 36px 60px -32px rgba(15,27,61,.32)",
        btn: "0 14px 28px -12px rgba(15,27,61,.55)",
        panel: "0 30px 60px -38px rgba(15,27,61,.3)",
        "panel-lg": "0 40px 70px -48px rgba(15,27,61,.3)",
        pl: "0 40px 70px -46px rgba(15,27,61,.35), inset 0 1px 0 #fff",
        app: "0 60px 100px -56px rgba(15,27,61,.45)",
      },
      borderRadius: {
        "4xl": "28px",
        "5xl": "36px",
        "6xl": "44px",
      },
    },
  },
  plugins: [],
};

export default config;
