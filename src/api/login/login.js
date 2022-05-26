const { Router } = require('express');
const cookieParser = require('cookie-parser');
const { itemData } = require('../../../services');

const loginRouter = new Router();

loginRouter.use(cookieParser());

loginRouter.get('/login', (req, res) => {
    res.render('login');
});

loginRouter.post('/login', async(req, res) => {
    let items = await itemData.getItem();
    const loginsArray = items.map(e => e.login == req.body.login);
    const result = loginsArray.findIndex ((e) => e == true);
    if(result > -1){
        res.cookie('login', true, { httpOnly: true });
        res.redirect('/'); 
    } else {
        res.redirect('/login');
    }        
});

module.exports = loginRouter;