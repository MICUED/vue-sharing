import babelConfig from './webpack.config.babel'

export default {
  ...babelConfig,
  output: {
    ...babelConfig.output,
    filename: 'output.tree.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader'
    }]
  }
}
