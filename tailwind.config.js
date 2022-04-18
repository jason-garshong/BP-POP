module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Jura', 'sans-serif']
    },
    extend: {
      colors: {
        'primary': "#1f438d",
        'secondary': "#79c143",
        'textcolor': "#6d6e71",
      },
      backgroundImage: {
        'main-bg': "url('/src/assets/bg_colour.png')",
      },
      downloadIcon: {
        'dIcon': "url('/src/assets/download.svg')",
      },
    },
  },
  plugins: [],
}
