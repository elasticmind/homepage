/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      inset: {
        '0': '0',
        '1/2': '50%'
      },
      boxShadow: {
        default: '0 2px 4px 0 rgba(0,0,0,0.4)',
        inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.4)'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
        sans: ['Work Sans', 'sans-serif']
      },
      colors: {
        light: '#FDFFFC',
        dark: '#2D2927',
        'dark-dark': '#14110F',
        primary: '#0999CC',
        'primary-light': '#3AC5F5',
        'primary-dark': '#0E2A34'
      },
      width: {
        '112': '28rem'
      },
      padding: {
        '112': '28rem'
      },
      maxWidth: {
        '8xl': '96rem'
      }
    }
  },
  variants: {
    textAlign: ['responsive', 'hover'],
    margin: ['responsive', 'hover'],
    padding: ['responsive', 'hover'],
    width: ['responsive', 'hover'],
    borderColor: ['hover'],
    borderWidth: ['hover']
  },
  plugins: []
}
