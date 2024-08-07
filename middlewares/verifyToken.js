const Jwt = require('jsonwebtoken')

const JwtKey = process.env.JWT_KEY

const verifyToken = (req, res, next) => {
    const token = req.headers["auth"]
    Jwt.verify(token, JwtKey, (err, valid) => {
        if (err) {
            res.send("invalide token credentials")
        } else {
            next();
        }
    })
}

module.exports =verifyToken;