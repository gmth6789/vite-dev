module.exports = {
  plugins: {
    'postcss-preset-env': {},
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    'postcss-preset-env': {
      features: {
        'nesting-rules': false,
        "is-pseudo-class": false
      }
    },
    'tailwindcss': {},
    'autoprefixer': {}
  },
};