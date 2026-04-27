/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navyNeutral": {
          "50": "#FAFAFA",
          "100": "#EDEDED",
          "200": "#DDDEE4",
          "300": "#8E90A2",
          "400": "#5E6073", // default navy
          "500": "#424559",
          "600": "#34384B",
          "700": "#282B3E",
        },
        "greenCore": {
          "50": "#CAEED9",
          "100": "#ACE5C4",
          "200": "#5CD790",
          "300": "#00C46E",
          "400": "#00A758", // default green
          "500": "#06874E",
          "600": "#046138",
          "700": "#004427",
        },
        "blueCore": {
          "50": "#C1D8F7",
          "100": "#76B0FF",
          "200": "#2D69FF",
          "300": "#1E1EE5",
          "400": "#0000C1", // default blue
          "500": "#00009A",
          "600": "#000082",
          "700": "#000060",
        },
        "coralAccent": {
          "50": "#F6CCC7",
          "100": "#FCACA1",
          "200": "#F69082",
          "300": "#FF7769",
          "400": "#EC6453", // default coral
          "500": "#D03A39",
          "600": "#A00E18",
          "700": "#830A10",
        },
        "goldSecondary": {
          "50": "#F8D38A",
          "100": "#FCC457",
          "200": "#F9AB2E",
          "300": "#F49600",
          "400": "#D77D28", // default gold
          "500": "#CE7612",
          "600": "#A75900",
        },
        "violetSecondary": {
          "50": "#D4D2E9",
          "100": "#9D8DBC",
          "200": "#836AA6",
          "300": "#6F5693",
          "400": "#604584", // default violet
          "500": "#4C336B",
          "600": "#331A53",
        },
        "turqSecondary": {
          "50": "#C5F4F1",
          "100": "#9DF3ED",
          "200": "#6AE7DF",
          "300": "#28D7CB",
          "400": "#05B2A7", // default turq
          "500": "#08A298",
          "600": "#09847B",
        }
      },
      fontFamily: {
        "ManulifeLight": ["ManulifeLight", "sans-serif"],
        "ManulifeRegular": ["ManulifeRegular", "sans-serif"],
        "ManulifeDemiBold": ["ManulifeDemiBold", "sans-serif"],
        "ManulifeBold": ["ManulifeBold", "sans-serif"],
        "ManulifeItalic": ["ManulifeItalic", "sans-serif"]
      }
    },
  },
  plugins: [],
}