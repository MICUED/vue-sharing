module.exports = {
  parser: 'babel-eslint',
  plugins: ['prettier'],
  extends: ['prettier'],
  rules: {
    'prettier/prettier': [2, {
      bracketSpacing: false,
      semi: false,
      singleQuote: true
    }]
  }
}
