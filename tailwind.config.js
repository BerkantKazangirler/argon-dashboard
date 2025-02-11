/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "selector",
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
        checkboxGreen: "#68D391",
        tableTd: "#E2E8F0",
        tableTr: "#718096",
        infoBg: "#F7FAFC",
        informationBg: "#F8F9FA",

        darkDetail: "#111C44",
        darkBg: "#0B1437",
        darkBottomBg: "#1B254B",
        darkBorder: "#4A5568",
      },
      borderRadius: {
        "2.5xl": "20px",
      },
      height: {
        98: "370px",
        99: "400px",
        100: "472px",
        300: "700px",
      },
      width: {
        98: "370px",
        100: "460px",
      },
      fontSize: {
        "2xs": "10px",
      },
    },
  },
  plugins: [],
};
