const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: "../.env" });

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.REACT_APP_SECRET, { expiresIn: '1h' }); // payload, secret, expires 
}

// login user
const loginUser = async (req, res) => {
    res.json({ mssg: "User login" })
}

// signup user
const signupUser = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);

        const token = createToken(user._id);

        res.status(200).json({ email, token });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { loginUser, signupUser };