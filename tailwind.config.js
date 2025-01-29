/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "sans-serif",
      },
      colors: {
        placeholderColor: "#A0AEC0",
        inputBorder: "#E2E8F0",
        detailColor: "#2D3748",
        detailBg: "#3182CE",
        detailGreen: "#48BB78",
        detailRed: "#E53E3E",
        tableTd: "#E2E8F0",
        tableTr: "#718096",
      },
      height: {
        100: "400px",
        300: "700px",
      },
    },
  },
  plugins: [],
};
