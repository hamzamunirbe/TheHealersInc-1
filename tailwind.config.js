/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fdfdff",
          "200": "#161c2d",
          "300": "rgba(0, 0, 0, 0.4)",
          "400": "rgba(0, 0, 0, 0.5)",
          "500": "rgba(255, 255, 255, 0.7)",
          "600": "rgba(255, 255, 255, 0)",
          "700": "rgba(22, 28, 45, 0.7)",
        },
        "neutral-1": "#fff",
        "vendor-colors-primary-1": "#70fbfb",
        "blue-gray-900": "#0f172a",
        "consumer-colors-monochromatic": "#ff9d26",
        "vendor-colors-triadic": "#a4a404",
        ghostwhite: "#f3f5f9",
        "consumer-colors-primary-1": "#fce7cc",
        tomato: "#f64b4b",
        orange: "rgba(255, 157, 38, 0.2)",
        black: "#000",
        lightcoral: "#e98080",
        "character-title-85": "rgba(0, 0, 0, 0.85)",
        "neutral-10": "#262626",
        "m3-sys-light-primary": "#6750a4",
        "m3-sys-light-outline": "#79747e",
        "neutral-8": "#595959",
        "neutral-7": "#8c8c8c",
        whitesmoke: {
          "100": "#f4f7fa",
          "200": "#e7e9ed",
        },
        darkorange: "#f28500",
      },
      spacing: {},
      fontFamily: {
        "web-primary-h3-primary-dm-sans": "'DM Sans'",
        "open-sans": "'Open Sans'",
        "h5-medium": "Roboto",
        "gilroy-bold": "Gilroy-Bold",
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        "81xl": "100px",
      },
    },
    fontSize: {
      mini: "15px",
      "4xs-4": "8.4px",
      mid: "17px",
      xl: "20px",
      base: "16px",
      "37xl": "56px",
      "15xl": "34px",
      "26xl": "45px",
      smi: "13px",
      "2xl": "21px",
      "17xl": "36px",
      "3xl": "22px",
      "10xl": "29px",
      lgi: "19px",
      "41xl": "60px",
      "29xl": "48px",
      "13xl": "32px",
      "7xl": "26px",
      sm: "14px",
      "19xl": "38px",
      "5xl": "24px",
      "53xl": "72px",
      "24xl": "43px",
      "39xl": "58px",
      inherit: "inherit",
    },
    screens: {
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
