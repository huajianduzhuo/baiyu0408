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
  model['create_time'] = new Date()
  model['status_code'] = 0
  return model
}

function insertIntoWords (words) {
  let model = createWordsModel(words)
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

module.exports = {
  insertIntoWords
}