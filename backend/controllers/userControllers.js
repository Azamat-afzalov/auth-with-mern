const User = require('../models/User');
const HttpError = require('../models/http-error');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async(req, res, next) => {
    const { email, password } = req.body;
    // console.log(email, password);
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email })
            // console.log(existingUser);
    } catch (err) {
        const error = new HttpError('logging in failed , please try again later')
        return next(error)
    }
    if (!existingUser) {
        const error = new HttpError('This user does not exist')
        return next(error);
    }
    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password)
    } catch (err) {
        const error = new HttpError('Could not log you in , please check your credentials', 500)
        return next(error);
    }
    if (!isValidPassword) {
        const error = new HttpError('Invalid credentials , could not log you in');
        return next(error);
    }
    // Create and sing token
    let token;
    try {
        token = jwt.sign({ userId: existingUser.id, email: existingUser.email },
                process.env.JWT_KEY, { expiresIn: '1h' }
            )
            //res.headers('Authorization', token)
    } catch (err) {
        const error = new HttpError('Logging in failed at creating token', 500);
        return next(error);
    }
    res.json({
        msg: "You logged in ",
        username: existingUser.name,
        email: existingUser.email,
        token: token
    })

}
const signUp = async(req, res, next) => {
    const { username, email, password } = req.body;
    console.log(username, email, password);
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
        username,
        email,
        password: hashedPassword
    })

    try {
        await createdUser.save();
    } catch (err) {
        const error = new HttpError('Creating user failed , error in saving to database', 500);
        return next(error);
    }

    res.status(201).json({
        userId: createdUser.id,
        email: createdUser.email,
        username: createdUser.username
    })
};
const getAllUsers = async(req, res, next) => {
    let users;
    try {
        users = await User.find({}, '-password -id');
    } catch (err) {
        const error = new HttpError(
            'Fetching users failed, please try again later',
            500
        );
        return next(error);
    }
    res.json({
        users: users.map(user => user.toObject({ getters: true }))
    })
};
const getUserById = async(req, res, next) => {
    let user;
    const { userId } = req.params;
    console.log(userId);
    try {
        user = await User.findById(userId)
    } catch (err) {
        const error = new HttpError(
            'Fetching user failed, please try again later',
            500
        );
        return next(error);
    }
    res.json({ user: user })
}
exports.login = login;
exports.signUp = signUp;
exports.getAllUsers = getAllUsers;
exports.getUserById = getUserById;