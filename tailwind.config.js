module.exports = {
  mode: 'jit', // Just-In-Time Compiler
  purge: ['./src/**/*.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        siteGreen: '#0C646D',
        siteBg: '#E7EEF0',
        siteBlue: '#252962',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
