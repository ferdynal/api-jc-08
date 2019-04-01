var db = require('./../database')

module.exports = {
    getAllUsers : (req,res) => {
        var sql = 'select * from users;'
        db.query(sql, (err,result)=> {
            res.send(result)
        })
    },
    getUserByUsername : (req,res) => {
        var username = req.query.username
        var sql = 'select * from users where username = ?'
        db.query(sql,username, (err,result)=>{
            res.send(result)
            console.log("Berhasil Get dengan method post")
        })
    },
    getUserById : (req,res) => {
        var id = req.params.terserah
        var sql = `select * from users where id = ${id};`
        db.query(sql,(err,result)=>{
            res.send(result[0])
        })
    },
    addUser : (req,res) => {
        var data = req.body
        var sql = 'insert into users set ?;'
        db.query(sql,data, (err,result) => {
            if(err) throw err
            res.send('Add User Sukses')
        })
    }
}