module.exports = {
  purge: ["./*html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateRows: {
        '12': 'repeat(12, minmax(0, 1fr))',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
