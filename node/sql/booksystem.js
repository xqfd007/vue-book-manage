// 链接sql数据库
const mysql = require('mysql')
const booksystem = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'qwer2580',
  database: 'date',
})
module.exports = booksystem
