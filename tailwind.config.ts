import tailwindScrollbar from "tailwind-scrollbar";

/** @type {import('tailwindcss').Config} */

const config: import("tailwindcss").Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "2xs": "360px",
        xs: "480px",
        "2md": "850px",
        "3xl": "1700px",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-from-right": {
          "0%": {
            opacity: "0",
            position: "relative",
            transform: "translateX(20%)",
          },
          "100%": {
            opacity: "1",
            position: "relative",
            transform: "translateX(0)",
          },
        },
        "fade-in-from-left": {
          "0%": {
            opacity: "0",
            position: "relative",
            transform: "translateX(-20%)",
          },
          "100%": {
            opacity: "1",
            position: "relative",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        fadeIn: "fade-in 0.3s ease-out forwards",
        fadeInFromRight: "fade-in-from-right 0.7s ease-out forwards",
        fadeInFromLeft: "fade-in-from-left 0.7s ease-out forwards",
      },
      spacing: {
        sectionGapSm: "4.5rem",
        sectionGapMd: "9rem",
        sectionGapLg: "13.5rem",
        sectionGapXl: "18rem",
      },
      boxShadow: {
        large: "0 10px 60px -10px rgba(0,0,0,0.25)",
        medium: "0 5px 40px -5px rgba(0,0,0,0.25)",
        small: "0 7px 20px -10px rgba(0,0,0,0.15)",
      },
      transitionDuration: {
        default: "200ms",
      },
      colors: {
        primary: "#ff8631",
        secondary: "#DB5937",
        primaryDark: "#e6792c",
        primaryLight: "#ff9246",
        primaryLightest: "#ffdbc1",
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
};

export default config;
