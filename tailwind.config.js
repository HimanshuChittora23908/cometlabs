module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fbfbfb",
        },
      },
      borderWidth: {
        '1': '1px',
      },
      fontFamily: {
        'kumbh': ["Kumbh Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}