const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send('Access Denied');
    }
    try {
        const verified = jwt.verify(token, process.env.JWT_KEY);
        req.user = verified;
    } catch (err) {
        const error = new HttpError('Invalid token', 401);
        next(error);
    }
}