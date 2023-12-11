const express = require('express');
const userController = require('../controllers/userController')

const router = express.Router();

router.post('/register',userController.registerUser)
router.get('/users', userController.getAllUsers)

module.exports = router;