const User = require('../models/User');
const HttpError = require('../models/http-error');
const bcrypt = require('bcrypt');

const login = async(req, res, next) => {
    const { email, password } = req.body;
    return res.json({
        msg: 'hello'
    })
}
const signUp = async(req, res, next) => {
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        const error = new HttpError('Signing up failed', 500);
        return next(error);
    }
    if (existingUser) {
        const error = new HttpError('User already exists , please log in instead of signing up', 422)
        return next(error);
    }
    let hashedPassword;
    try {
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        const error = new HttpError('Could not create a user , hashing password failed', 500);
        return next(error);
    }
    const createdUser = new User({
        name,
        email,
        password: hashedPassword
    })

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError('Creating user failed , error in saving to database', 500);
        return next(error);
    }

    res.status(201).json({ usreId: createdUser.id, email: createdUser.email })
};
const getUserById = async(req, res, next) => {};
const getAllUsers = async(req, res, next) => {
    console.log('getAllUsers function ran')
    let users;
    try {
        users = await User.find({}, '-password');
    } catch (err) {
        const error = new HttpError(
            'Fetching users failed, please try again later',
            500
        );
        return next(error);
    }
    res.json({
        users: users.map(user => usre.toObject({ getters: true }))
    })
};

exports.login = login;
exports.signUp = signUp;
exports.getUserById = getUserById;
exports.getAllUsers = getAllUsers;