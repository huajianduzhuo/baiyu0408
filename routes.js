const Router = require('koa-router')
const wordsModel = require('./models/words')
const Result = require('./common/result')
const router = new Router({
  prefix: '/api'
})
router.use(async (ctx, next) => {
  ctx.body = ctx.request.body
  await next()
})

router.post('/say', async (ctx, next) => {
  let words = ctx.body.words
  words.computerId = ctx.request.ip
  try {
    let id = await wordsModel.insertIntoWords(words)
    ctx.body = new Result({id})
  } catch (error) {
    ctx.body = new Result(null, 1, error)
  }
})

router.get('/getUserWordsList', async (ctx, next) => {
  let name = ctx.query.name
  let computerId = ctx.request.ip
  try {
    let results = await wordsModel.getWordsListByName(name, computerId)
    ctx.body = new Result(results)
  } catch (error) {
    ctx.body = new Result(null, 1, error)
  }
})

router.get('/getAllWordsList', async (ctx, next) => {
  try {
    let results = await wordsModel.getAllWordsList()
    ctx.body = new Result(results)
  } catch (error) {
    ctx.body = new Result(null, 1, error)
  }
})

router.get('/getCityWordsCount', async (ctx, next) => {
  try {
    let results = await wordsModel.getCityWordsCount()
    ctx.body = new Result(results)
  } catch (error) {
    ctx.body = new Result(null, 1, error)
  }
})

module.exports = router