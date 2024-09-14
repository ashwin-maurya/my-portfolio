/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  lightMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        PlayfairDisplay: ["PlayfairDisplay-VariableFont_wght", "sans-serif"],
        proximanova: ["Fontspring-DEMO-proximanova-light", "sans-serif"],
        Minerva: ["Minerva-Modern-Regular", "sans-serif"],
      },
      screens: {
        "3xl": "1940px", // Customize 2xl breakpoint
        "2xl": "1640px", // Customize 2xl breakpoint
        xl: "1280px", // Customize xl breakpoint
        lg: "1024px", // Default large breakpoint
        md: "768px", // Default medium breakpoint
        sm: "640px", // Default small breakpoint
        xs: "480px", // You can add a custom breakpoint for extra small
      },
    },
  },
  plugins: [],
};
