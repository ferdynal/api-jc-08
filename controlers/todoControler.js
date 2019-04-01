const db = require('./../database')

module.exports = {
    addTodo : (req,res) => {
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
    },
    editTodoById : (req,res) => {
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
    },
    deleteTodo : (req,res) => {
        var id = req.params.id
        var sql = `DELETE FROM to_do WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err
            res.send('Berhasil di delete')
        })
    },
    getAllTodo : (req,res) => {
        var sql = `select to_do.id, username, to_do from to_do
                   join users on id_user = users.id;`
        db.query(sql, (err,result) => {
            if(err) throw err
            res.send(result)
        })
    }
}

