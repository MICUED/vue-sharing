import path from 'path'

import pug from 'pug'
import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const base = path.resolve(__dirname, '..')
const src = path.resolve(base, 'src/vue')
const dist = path.resolve(base, 'dist')

const NODE_ENV = process.env.NODE_ENV || 'development'

const isProduction = NODE_ENV === 'production'

const entry = [path.resolve(src, 'entry.js')]
const plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
  }),
  new HtmlWebpackPlugin({
    templateContent: pug.renderFile(path.resolve(src, 'index.pug')),
    favicon: path.resolve(src, '../static/favicon.ico')
  })
]

export default {
  resolve: {
    modules: [src, 'node_modules'],
    extensions: ['.vue', '.js', '.styl', '.pug'],
    enforceExtension: false,
    enforceModuleExtension: false
  },
  target: 'web',
  devtool: !isProduction && 'source-map',
  entry,
  output: {
    path: dist,
    filename: `[name].[${isProduction ? 'chunkhash' : 'hash'}].js`
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }
    ]
  },
  plugins
}

if (!isProduction) {
  entry.push('webpack-hot-middleware/client')
  plugins.push(new webpack.HotModuleReplacementPlugin())
}
