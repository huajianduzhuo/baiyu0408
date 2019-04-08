const pool = require('../connection')
/** 
 * 数据库与视图模型映射
 * 第一列：数据库列名
 * 第二列：视图模型 key
 * 第三列：是否可由用户输入
 */
const wordsMap = [
  ['words_id', 'id'],
  ['wb_name', 'wbID', true],
  ['words', 'words', true],
  ['province', 'addressProvince', true],
  ['city', 'addressCity', true],
  ['computer_id', 'computerId', true],
  ['create_time', 'createTime'],
  ['status_code', 'status'] // 0: 有效
]

function createWordsModel (words) {
  let model = {}
  for ([columnName, name, fromUser] of wordsMap) {
    if (fromUser) {
      model[columnName] = words[name]
    }
  }
  return model
}

function convertModelToViewData (model) {
  let words = {}
  for ([columnName, name, fromUser] of wordsMap) {
    if (fromUser && model[columnName]) {
      words[name] = model[columnName]
    }
  }
  return words
}

function insertIntoWords (words) {
  let model = createWordsModel(words)
  model['create_time'] = new Date()
  model['status_code'] = 0
  return new Promise((resolve, reject) => {
    pool.query('insert into words set ?', model, (error, results) => {
      if (error) {
        console.log('insert into sql error: ', error)
        reject('添加失败')
      } else {
        resolve(results.insertId)
      }
    })
  })
}

function getWordsListByName (name, computerId) {
  return new Promise((resolve, reject) => {
    pool.query('select words_id, wb_name, words, province, city from words where wb_name = ? and computer_id = ? and status_code = 0', [name, computerId], (error, results) => {
      if (error) {
        console.log('select words list by name failed: ', error)
        reject('查询失败')
      } else {
        let list = results.map(model => convertModelToViewData(model))
        resolve(list)
      }
    })
  })
}

function getAllWordsList (order) {
  order = order || 'desc'
  let sql
  switch (order) {
    case 'desc':
      sql = 'select words_id, wb_name, words, province, city from words where status_code = 0 order by create_time desc'
      break
    case 'asc':
      sql = 'select words_id, wb_name, words, province, city from words where status_code = 0 order by create_time asc'
      break
    default:
      sql = 'select words_id, wb_name, words, province, city from words where status_code = 0 order by create_time desc'
  }
  return new Promise((resolve, reject) => {
    pool.query(sql, (error, results) => {
      if (error) {
        console.log('select all words list failed: ', error)
        reject('查询失败')
      } else {
        let list = results.map(model => convertModelToViewData(model))
        resolve(list)
      }
    })
  })
}

function getCityWordsCount () {
  return new Promise((resolve, reject) => {
    pool.query('select city as addressCity, count(0) as count from words group by city;', (error, results) => {
      if (error) {
        console.log('select words list by name failed: ', error)
        reject('查询失败')
      } else {
        resolve(results)
      }
    })
  })
}

module.exports = {
  insertIntoWords,
  getWordsListByName,
  getAllWordsList,
  getCityWordsCount
}