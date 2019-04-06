const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 3,
  host: 'localhost',
  port: 3306,
  user: 'myj',
  password: '1234',
  database: 'baiyu0408',
  charset: 'utf8'
})

pool.on('error', err => {
  console.log('mysql serve error occured', err)
})

module.exports = pool;