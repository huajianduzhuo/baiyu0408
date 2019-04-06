const Router = require('koa-router')
const router = new Router({
  prefix: '/api'
})
router.use(async (ctx, next) => {
  ctx.body = ctx.request.body
  next()
})

module.exports = router