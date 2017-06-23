import path from 'path'

import pug from 'pug'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const src = path.resolve(__dirname, '../../src/webpack')

const NODE_ENV = process.env.NODE_ENV || 'development'

const isProduction = NODE_ENV === 'production'

export default {
  target: 'web',
  entry: path.resolve(src, 'entry.server.js'),
  output: {
    path: src,
    filename: 'output.server.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      templateContent: pug.renderFile(path.resolve(src, 'template.pug'), {
        pretty: !isProduction
      }),
      favicon: path.resolve(src, '../static/favicon.ico')
    })
  ]
}
