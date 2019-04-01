var mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user : 'jamal' ,
    password: 'jamaludin' ,
    database: 'to_do'
})

module.exports = db