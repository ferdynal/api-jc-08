const router = require('express').Router()
const { addTodo,deleteTodo,editTodoById,getAllTodo } = require('./../controlers').todoControler


router.post('/addTodo' ,addTodo)
router.delete('/delete/:id' ,deleteTodo)
router.put('/edit/:id' , editTodoById)
router.get('/getAll' , getAllTodo)

module.exports = router