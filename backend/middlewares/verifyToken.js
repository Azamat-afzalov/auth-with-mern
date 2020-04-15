const jwt = require('jsonwebtoken');
const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    }
    const token = req.headers.authorization.split(' ')[1]; //**  Authorization: "Bearer token"
    console.log(token, "TOKEN FROM HEADER");
    if (token) {
        jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
            if (err) {
                // throw new Error('Error occured in verifying token');
                return res.status(401).json({ success: false, msg: "invalid token" })
                console.log("ERROR BLOCK");
            } else {
                console.log('Token validation passed')
                req.decoded = decoded;
                console.log(decoded);

                next();
            }
        })

    } else {
        throw new Error('Authentification failed , you are not logged in');
    }
}