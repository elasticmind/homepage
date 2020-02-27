/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    inset: {
      '0': '0',
      '1/2': '50%'
    },
    minHeight: {
      '200': '200px'
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
    extend: {
      spacing: {
        '112': '28rem'
      },
      padding: {
        '112': '28rem'
      }
    }
  },
  variants: {
    margin: ['hover'],
    padding: ['hover'],
    borderColor: ['hover'],
    borderWidth: ['hover']
  },
  plugins: []
}
