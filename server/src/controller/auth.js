const { user } = require('../model');
const AsyncHandler = require('../middleware/AsyncHandler');
const jwt = require('jsonwebtoken');
const path = require('path');
const dotenv = require('dotenv');
dotenv.config({ path: path.resolve(__dirname, '../config/.env') })


const TOKEN_SECRET = process.env.TOKEN_SECRET;
const register = AsyncHandler(async (req, res) => {


    const { firstName, lastName, email, password} = req.body;

    const exUser = await user.isEmailTaken(email);

    if (exUser) {
        // return next(new Errorhandler('email already taken', 400))
        return res.status(401).send({ message: 'email already taken', sucess: false })
    };

    const newUser = new user({
        firstName,
        lastName,
        email,
        password
    })
    newUser.save()

    return res.status(200).send({ message: 'account created Sucessfully', sucess: true });
});

const login = AsyncHandler(async (req, res) => {

    const { email, password } = req.body;
    const exUser = await user.findOne({ email: email });
    if (!exUser) {
        return res.status(404).send({ message: 'user not found', sucess: false })
    }

    const validate = await user.validatePassword(password, exUser.password);

    if (!validate) {
        return res.status(400).send({ message: 'invalid password', sucess: false });
    }

    // sign Token , Send Token
    const token = jwt.sign({
        id: exUser.id
    },
        TOKEN_SECRET
    )

    return res.status(200).send({ token: token, message: "login sucess", sucess: true });
});

module.exports = {
    register,
    login
}