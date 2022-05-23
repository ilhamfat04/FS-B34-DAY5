const express = require('express')

const router = express.Router()

// Controller
// import controller function here 
const { addUser, getUsers, getUser, updateUser } = require('../controllers/user')

// Route
router.post('/user', addUser)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
// add route here
router.patch('/user/:id', updateUser)

module.exports = router