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
        light: '#f6feff',
        'dark-light': '#212531',
        dark: '#0e111a',
        'dark-dark': '#060709',
        primary: '#89a3ba',
        'primary-light': '#91adc2',
        'primary-dark': '#3b4b58',
        secondary: '#727b6a',
        'secondary-light': '#7a8b7b',
        'secondary-dark': '#50574f'
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
