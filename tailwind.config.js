/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "4.5xl": "2.5rem",
        "md-custom": "1.0625rem",
      },
    },
  },
  plugins: [],
};
