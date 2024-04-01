/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        primary: "#005F95",
        secundary: "#D65F78",
        alternative: "#FFFE30",
      },
    },
  },
  plugins: [],
};
