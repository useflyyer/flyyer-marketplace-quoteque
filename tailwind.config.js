module.exports = {
  purge: [
    "./(templates/components)/**/*.(js|jsx|ts|tsx)",
    "./styles/**/*.css",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'economist-red': '#e3120b',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
