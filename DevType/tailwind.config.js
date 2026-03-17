/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Pretendard"', "sans-serif"],
        jet: ['"JetBrains Mono"', "monospace"],
      },
      colors: {
        navy: "#0f172a",
        white: "#f8fafc",
        yellow: "#f59e0b",
        perple: "#6366f1",
        skyblue: "#22d3ee",
        black: "#333d48",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
        shake: {
          "0%, 100%": { transform: "translateY(0)" },
          "25%": { transform: "translateY(2px)" },
          "50%": { transform: "translateY(-2px)" },
          "75%": { transform: "translateY(2px)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        shake: "shake 0.1s 0s 2",
      },
    },
  },
  plugins: [],
};
