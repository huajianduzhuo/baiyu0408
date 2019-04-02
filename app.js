const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser')
const router = require('./routes')
const app = new Koa()

// static files
const main = require('koa-static')(path.join(__dirname, '../public'))
app.use(main)

// body-parser
app.use(bodyParser())
app.use(async (ctx, next) => {
  ctx.body = ctx.request.body
  next()
})

// router
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log(`the server is running at "http://localhost:3000/"`)
})