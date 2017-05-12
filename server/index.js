import path from 'path'

import Koa from 'koa'
import logger from 'koa-logger'
import compress from 'koa-compress'
import serve from 'koa-static'
import _debug from 'debug'

import dev from './dev-tools'

const debug = _debug('mic:server')

const NODE_ENV = process.env.NODE_ENV || 'development'

const isProduction = NODE_ENV === 'production'

const base = path.resolve(__dirname, '..')
const dist = path.resolve(base, 'dist')

const app = new Koa()

app.use(logger())
app.use(compress())

if (isProduction) {
  app.use(serve(dist))
} else {
  dev(app)
}

const args = [3000, 'localhost']

export default app.listen(...args, err =>
  debug.apply(null, err ? [err] : ['Server is now running at %s:%s.', ...args.reverse()]))
