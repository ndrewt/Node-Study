const mysql = require('mysql2')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-study',
    password: '1010'
})

module.exports = pool.promise()