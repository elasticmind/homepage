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
    padding: {
      '2': '0.5rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '32': '8rem',
      '48': '12rem',
      '96': '24rem'
    },
    minHeight: {
      '200': '200px'
    },
    boxShadow: {
      default: '0 2px 4px 0 rgba(0,0,0,0.4)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.4)'
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
