/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This forces the whole app to use the new Race Font
        sans: ["Kanit", "sans-serif"],
      },
      colors: {
        "jzee-green": "#22c55e",
        "jzee-black": "#0a0a0a",
      },
    },
  },
  plugins: [],
};
