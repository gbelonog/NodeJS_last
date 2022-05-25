//const apiRouter = require('./apiRouter');
const { Router } = require('express');
const chat = require('./chat/chat');
const signup = require('./signup/signup');
const login = require('./login/login');

const apiRouter = new Router();

apiRouter.use('/', chat);
apiRouter.use('/signup', signup);
apiRouter.use('/login', login);
apiRouter.use('/chat', chat);
apiRouter.use('/logout', (req, res) => {
    res.cookie('login', false, { httpOnly: true });
    res.redirect('/'); 
});

module.exports = apiRouter;