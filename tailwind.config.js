/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    
  ],
  theme: {

    screens: {
      mq1700: {
        raw: "screen and (max-width: 1700px)",
      },
      mq1450: {
        raw: "screen and (max-width: 1450px)",
      },
      mq1325: {
        raw: "screen and (max-width: 1325px)",
      },
      lg: {
        max: "1200px",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
    
    fontSize: {
      sm: "14px",
      lg: "18px",
      xs: "12px",
      xl: "20px",
      base: "16px",
      "11xl": "30px",
      "5xl": "24px",
      lgi: "19px",
      "13xl": "32px",
      inherit: "inherit",
    },
    extend: {
      borderRadius: {
        "9980xl": "9999px",
        "81xl": "100px",
        "3xs": "10px",
        xl: "20px",
        "11xl": "30px",
        "21xl": "40px",
        "border-radius-rounded-full": "9999px",
        "border-radius-rounded-lg": "8px",
        "border-radius-rounded-2xl": "16px",
        "border-radius-rounded-md": "6px",
        "border-radius-rounded-lg1": "8px",
        "border-radius-rounded-full1": "9999px",
        "rounded-lg": "8px",
        "border-radius-rounded-lg2": "8px",
        "border-radius-rounded-lg3": "8px",
        "border-radius-rounded": "4px",
        "border-radius-rounded-md1": "6px",
        "border-radius-rounded-3xl1": "24px",
        "border-radius-rounded-full2": "9999px",
      },
      colors: {
        "surface-component": "#fff",
        "interface-surface-page": "#f0f3f7",
        "surface-component-muted": "#f5f6f7",
        "text-default": "#4b586e",
        black: "#000",
        "colors-primary-400": "#fa6f7a",
        brown: "#c73d47",
        "text-title": "#2e3642",
        "interface-text-subtitle": "#9498a1",
        "interface-stroke-default": "#becde3",
        gray: "rgba(0, 0, 0, 0)",
        "colors-highlight-500": "#1596e2",
        darkslategray: "#374151",
        "interface-text-subtitle1": "#9ca1ab",
        "colors-neutral-950": "#263040",
        "brand-neutral-500": "#91a5c4",
        "colors-neutral-200": "#dbe1ea",
      },
      spacing: {
        "spacing-6": "24px",
        "spacing-3": "12px",
        "spacing-9": "36px",
        "spacing-2": "8px",
        "spacing-1": "4px",
        "spacing-5": "20px",
        "spacing-4": "16px",
        "spacing-11": "4px",
        "spacing-12": "4px",
        boundvariablesdata: "8px",
        "spacing-31": "12px",
        "spacing-25": "10px",
        "spacing-51": "20px",
        "spacing-41": "16px",
      },
      fontFamily: {
        "text-text-sm-font-normal": "Inter",
        "work-sans": "'Work Sans'",
      },
      borderRadius: {
        "9980xl": "9999px",
        "border-radius-rounded-xl": "12px",
        "border-radius-rounded-lg": "8px",
        "border-radius-rounded": "4px",
        "border-radius-rounded-full": "9999px",
      },
    },
  },
  plugins: [],
};
