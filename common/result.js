class Result {
  constructor(data, code, message) {
    this.data = data
    this.code = code || 0
    this.message = message || '操作成功'
  }
}

module.exports = Result