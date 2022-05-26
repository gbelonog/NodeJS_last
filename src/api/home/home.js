const { Router } = require('express');
const pug = require('pug');
const path = require('path');
const cookieParser = require('cookie-parser');
const { itemData } = require('../../../services');

const homeRouter = new Router();
homeRouter.use(cookieParser());
homeRouter.get('/', async(req, res) => {
    let { login } = req.cookies;
    let items = await itemData.getItem();
    const list = items.map(e => e.login);
    res.render('chatList' , { login, items: list });
});

homeRouter.get('/home', (req, res) => {
    res.redirect('/'); 
});

homeRouter .post('/', (req, res) => {
    res.render('signup', {})
});

module.exports = homeRouter;