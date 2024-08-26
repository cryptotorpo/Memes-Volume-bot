/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-header": "#191919",
        "bg-button": "#F2EBEB52",
        "bg-active": "#4F4B3F",
        "text-main": "#D42680",
        "text-sub": "#423BC7"
      },
      fontFamily: {
        'caveat': ['Caveat Brush', 'cursive'], // Add 'cursive' as a fallback
        'spicy': ["Spicy Rice", 'serif']
      },
      backgroundImage: {
        'bot-pattern': "url('\img/bot-bg.png')",
        'button-gradient': "linear-gradient(94.71deg, #D42680 6.64%, #423BC7 107.65%)",
      }
    },
  },
  plugins: [],
}

