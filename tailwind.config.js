module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: ['Jura', 'sans-serif']
    },
    extend: {
      colors:{
        'primary': "#1f438d",
        'secondary': "#79c143",
        'textcolor': "#6d6e71",
      },
      backgroundImage: {
        'main-bg': "url('/src/assets/bg_colour.png')",
      }
    },
  },
  plugins: [],
}
