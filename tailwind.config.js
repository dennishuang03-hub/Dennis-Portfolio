/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        minecraft: ['Minecraft', 'sans-serif'],
        mono: ['"Cascadia Code"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace']
      },

      keyframes: {
        typing: {
          "0%": { width: "0%", visibility: "hidden" },
          "100%": { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
      },

      animation: {
        typing: "typing 3s steps(60) infinite alternate, blink 0.7s infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}
