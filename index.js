var server = require('express')
var bodyParser = require('body-parser')
var app = server()
var cors = require('cors')

app.use(cors())
app.use(bodyParser.json());

const port = 2000 
const { todoRouter } = require('./router')

app.get('/' , (req,res) => {
    res.send('<h1>Hello World</h1>')
})

app.use('/todo' , todoRouter)


// app.get('/nama/:terserah' , (req,res) => {
//     var nama = req.params.params
//     res.send('nama saya ' + nama)
// })

// app.get('/product' , (req,res) => {
//     var nama = req.query.nama
//     res.send('produk ' + nama)
// })







app.listen(port , ()=> console.log('aktif di port ' + port))