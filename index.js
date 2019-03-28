var server = require('express')
var bodyParser = require('body-parser')
var app = server()
var mysql = require('mysql')
var cors = require('cors')


app.use(cors())
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

app.get('/nama/:terserah' , (req,res) => {
    var nama = req.params.params
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
    var sql = `insert into to_do (id_user, to_do) values (${req.body.user},'${req.body.todo}');`
    db.query(sql , (err,result) => {
        if(err) throw err
        var sql2 = `select to_do.id, username, to_do from to_do
                    join users on id_user = users.id;`
        db.query(sql2, (err,result1)=>{
            if(err) throw err
            res.send(result1)
        })
    })
})

app.post('/adduser' , (req,res) => {
    var data = req.body
    var sql = 'insert into users set ?;'
    db.query(sql,data, (err,result) => {
        if(err) throw err
        res.send('Add User Sukses')
    })
})

app.put('/edittodo/:id' , (req,res) => {
    var id = req.params.id
    var data = req.body.todo
    var sql = `UPDATE to_do
               SET to_do = ?
               WHERE id = ${id};`
    db.query(sql ,data, (err,result)=>{
        try{
            if(err) throw err.message
            var sql2 = `select to_do.id, username, to_do from to_do
                        join users on id_user = users.id;`
            db.query(sql2, (err,result1) => {
                if(err) throw err
                res.send(result1)
            })
            // res.send('berhasil di update')
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