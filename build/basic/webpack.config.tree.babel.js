import babelConfig from './webpack.config.babel'

export default {
  ...babelConfig,
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: 'babel-loader',
  //       exclude: /node_modules/
  //     }
  //   ]
  // },
  output: {
    ...babelConfig.output,
    filename: 'output.tree.js'
  }
}
