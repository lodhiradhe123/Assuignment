var express = require('express');
var router = express.Router();
const User = require("../models/userSchema");
const { registerUser, loginUser } = require('../controllers/userController');

// register user post route
router.post('/', registerUser);


// login user post route
router.post('/login',loginUser)

module.exports = router;
