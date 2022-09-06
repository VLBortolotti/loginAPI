const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const userController = require('../controller/userController');

router.get('/:id', auth.checkToken, userController.getUser);

router.post('/register', userController.postUser);

module.exports = router;