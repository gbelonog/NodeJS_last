const { Router } = require('express');
const cookieParser = require('cookie-parser');

const { signupValidation } = require('../../validation');
const { itemData } = require('../../../services');

const signUpRouter = new Router();

signUpRouter.use(cookieParser());

signUpRouter.get('/signup', (req, res) => {
    res.render('signup', { error: '' });
});

signUpRouter.post('/signup', signupValidation.appValidator, async (req, res) => {
    const { error } = req.validation || '';
    if (!!req.validation.error) {
        res.render('signup', { error });
    } else {
        await itemData.setItem({
            login: req.body.userName,
            password: req.body.password
        });
        res.cookie('login', true, { httpOnly: true });
        res.redirect('/');
    }
});

module.exports = signUpRouter;