const express = require('express');
const { auth } = require('../controller')
const validate = require('../middleware/validate');
const { registerValidaiton, loginValidation} = require('../validation/auth.Validaiton');
const router = express.Router();

router.route('/register').post(validate(registerValidaiton), auth.register);
router.route('/login').post(validate(loginValidation), auth.login);

module.exports = router;