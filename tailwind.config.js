export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "jzee-green": "#22c55e",
        "jzee-black": "#0a0a0a",
      },
      // 👇 COPY THIS PART EXACTLY
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      // 👆 END COPY
    },
  },
  plugins: [],
};
