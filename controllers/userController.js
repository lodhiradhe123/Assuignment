var express = require('express');
var router = express.Router();
const User = require("../models/userSchema");
const Jwt = require('jsonwebtoken')
const JwtKey = process.env.JWT_KEY

exports.registerUser = async (req, res, next) => {
    try {
        const user = await User(req.body)
        await user.save();
        // res.send(user)
        Jwt.sign({ user }, JwtKey, { expiresIn: "2h" }, (err, token) => {
            if (err) {
                res.send("something went wrong !")
            }
            res.send({ user, auth: token })
        })
    } catch (error) {
        res.send(error.message)
    }
}

exports.loginUser = async (req, res, next) => {
    if (req.body.email && req.body.password) {
        try {
            const user = await User.findOne(req.body).select("-password")
            // res.send(user);
            Jwt.sign({ user }, JwtKey, { expiresIn: "1d" }, (err, token) => {
                if (err) {
                    res.send("something went wrong !")
                }
                res.send({ user, auth: token })
            })
        } catch (err) {
            res.send(err.message)
        }
    } else {
        res.status(400).send("Invalid email or password")
    }
}