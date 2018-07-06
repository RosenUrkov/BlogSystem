const { Router } = require('express');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const config = require('../config');
const { sendSuccess, sendError } = require('./responses');

const attachRouter = (data) => {
    const router = new Router();
    router
        .post('/register', (req, res) => {
            const user = req.body;

            data
                .addUser(user)
                .then(() => sendSuccess('Register success!', res, user))
                .catch((error) => sendError(error, res));
        })
        .post('/logout',
            passport.authenticate('jwt', { session: false }),
            (req, res) => {
                sendSuccess('Logout success!', res);
            })
        .post('/login', (req, res) => {
            const user = req.body;

            data
                .findUserByUsername(user.username)
                .then((expUser) => {
                    return data.validateUserPassword(expUser, user.password);
                })
                .then((expUser) => {
                    const jwtObject = {
                        _id: user._id,
                        username: user.username,
                    };

                    const token = jwt.sign(jwtObject, config.APP_SECRET, {
                        expiresIn: 1440,
                    });

                    sendSuccess('Login success!', res, {
                        token,
                        user: expUser,
                    });
                })
                .catch((error) => sendError(error, res));
        });

    return router;
};

module.exports = attachRouter;
