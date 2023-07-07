/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto"],
        montserrat: ["Montserrat"],
      },
      colors: {
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        green: "#7FB77E",
        light_green: {
          DEFAULT: "rgb(177, 215, 180)",
          100: "rgb(177, 215, 180, 0.1)",
        },
        cream: "#F7F6DC",
        orange: "#FFC090",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear":
          "linear-gradient(90deg, rgba(255,192,144,1) 0%, rgba(255,192,144,1) 30%, rgba(247,246,220,1) 70%, rgba(247,246,220,1) 100%)",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-bg": "url('/images/hero-bg.png')",
        "discount-bg": "url('/images/discount-section-image.jpg')",
      },
      keyframes: {
        bannermove: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(-50%, 0)" },
        },
      },
      animation: {
        "marquee-infinite": "bannermove 10s linear infinite",
      },
    },
  },
};
