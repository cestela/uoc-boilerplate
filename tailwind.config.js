module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'concert': "url('/src/assets/images/concert.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: ["./src/**/*.html"]
}
