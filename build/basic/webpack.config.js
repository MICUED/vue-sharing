const path = require('path')

const src = path.resolve(__dirname, '../../src/webpack')

module.exports = {
  entry: path.resolve(src, 'entry.js'),
  output: {
    path: src,
    filename: 'output.js'
  }
}
