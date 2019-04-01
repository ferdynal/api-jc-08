const router = require('express').Router()
const { addUser,getAllUsers,getUserById,getUserByUsername } = require('./../controlers').userControler


router.post('/addUser' ,addUser)
router.get('/getAllUser' ,getAllUsers)
router.get('/getUser/:terserah' , getUserById)
router.get('/user' , getUserByUsername)

module.exports = router