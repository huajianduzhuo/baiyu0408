const Koa = require('koa')
const path = require('path')
const fs = require('fs')
const bodyParser = require('koa-bodyparser')
const router = require('./routes')
const app = new Koa()

// static files
const main = require('koa-static')(path.join(__dirname, '/baiyu0408fe/dist/'))
app.use(main)

// adapt vue-router history mode
const historyRoutesReg = /\.[a-zA-Z]+$/
app.use(async (ctx, next) => {
  await next()
  if (ctx.status === 404 && !historyRoutesReg.test(ctx.path)) {
    ctx.status = 200
    ctx.type = 'html'
    ctx.body = fs.createReadStream('./baiyu0408fe/dist/index.html')
  }
})

// body-parser
app.use(bodyParser())

// router
app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => {
  console.log(`the server is running at "http://localhost:3000/"`)
})