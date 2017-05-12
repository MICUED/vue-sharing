import path from 'path'

const src = path.resolve(__dirname, '../../src/webpack')

export default {
  target: 'web',
  entry: path.resolve(src, 'entry.babel.js'),
  output: {
    path: src,
    filename: 'output.babel.js'
  },
  externals: {
    vue: 'Vue'
  }
}
