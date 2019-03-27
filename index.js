var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var mysql = require('mysql')
app.use(bodyParser.json());

const port = 2000 
const db = mysql.createConnection({
    host: 'localhost',
    user : 'jamal' ,
    password: 'jamaludin' ,
    database: 'to_do'
})



app.get('/' , (req,res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/nama/:id' , (req,res) => {
    var nama = req.params.id
    res.send('nama saya ' + nama)
})

app.get('/product' , (req,res) => {
    var nama = req.query.nama
    res.send('produk ' + nama)
})

app.get('/alluser', (req,res) => {
    var sql = 'select * from users;'
    db.query(sql, (err,result)=> {
        res.send(result)
    })
})

app.get('/user/:terserah' , (req,res) => {
    var id = req.params.terserah
    var sql = `select * from users where id = ${id};`
    db.query(sql,(err,result)=>{
        res.send(result[0])
    })
})


app.post('/addtodo' , (req,res) => {
    // REQ.BODY BUAT AMBIL DATA DARI FRONT END
    console.log(req.body)
    var user = req.body.user;
    var todo = req.body.todo
    var sql = `insert into to_do (id_user, to_do) values (${user},'${todo}');`
    db.query(sql , (err,result) => {
        if(err) throw err
        res.send('add to do sukses')
    })
})

app.post('/adduser' , (req,res) => {
    var data = req.body
    var sql = 'insert into users set?;'
    db.query(sql,data, (err,result) => {
        if(err) throw err
        res.send('Add User Sukses')
    })
})

app.put('/edittodo/:id' , (req,res) => {
    var id = req.params.id
    var data = req.body
    var sql = `UPDATE to_do
               SET to_do = ?
               WHERE id = ${id};`
    db.query(sql ,data, (err,result)=>{
        try{
            if(err) throw err.message
            res.send('berhasil di update')
        }catch(err){
            res.send(err)
        }
        
    })
})


app.delete('/deletetodo/:id' , (req,res) => {
    var id = req.params.id
    var sql = `DELETE FROM to_do WHERE id=${id}`
    db.query(sql,(err,result) => {
        if(err) throw err
        res.send('Berhasil di delete')
    })
})

app.get('/alltodo' , (req,res) => {
    var sql = `select to_do.id, username, to_do from to_do
               join users on id_user = users.id;`
    db.query(sql, (err,result) => {
        if(err) throw err
        res.send(result)
    })
})








app.listen(port , ()=> console.log('aktif di port ' + port))