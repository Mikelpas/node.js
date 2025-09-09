const express = require('express');
const router = express.Router();
const { getSignup, postRegister, getSignin, getDashboard, postLogin } = require('../controllers/user.controller')

router.post('/register', postRegister);

router.get('/signup', getSignup);

router.post('/login', postLogin);

router.get('/signin', getSignin);

router.get("/dashboard", getDashboard);

module.exports = router;