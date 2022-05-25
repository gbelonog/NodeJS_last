const { Router } = require('express');
const cookieParser = require('cookie-parser');

const { itemData } = require('../../../services');

const loginRouter = new Router();

loginRouter.use(cookieParser());

loginRouter.get('/login', (req, res) => {
    res.render('login');
});

loginRouter.post('/login', async (req, res) => {
    let items = await itemData.getItem();
    const foundLogin = items.find(e => e.login == req.body.login);
    if (foundLogin && foundLogin.password === req.body.password) {
        res.cookie('login', true, { httpOnly: true });
        res.redirect('/');
    } else {
        res.redirect('/login');
    }
});

module.exports = loginRouter;