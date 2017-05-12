import webpackDevMiddleware from 'webpack-dev-middleware'
import applyExpressMiddleware from './apply-express-middleware'
import _debug from 'debug'

const debug = _debug('hi:webpack-dev')

export default compiler => {
  debug('Enable webpack dev middleware.')

  const middleware = webpackDevMiddleware(compiler, {
    publicPath: 'http://localhost:3000',
    hot: true,
    quiet: false,
    noInfo: false,
    lazy: false,
    stats: {
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }
  })

  return async function koaWebpackDevMiddleware(ctx, next) {
    /* eslint prefer-const: 0 */
    let hasNext = await applyExpressMiddleware(middleware, ctx.req, {
      end(content) {
        ctx.body = content
      },
      setHeader() {
        ctx.set.apply(ctx, arguments)
      }
    })

    if (hasNext) {
      await next()
    }
  }
}
