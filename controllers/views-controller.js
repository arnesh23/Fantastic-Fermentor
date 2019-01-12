var express  = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('home', { user: req.user }));

router.get('/register-user', (req, res) => res.render('register', { user: req.user }));
router.get('/login-user', (req, res) => res.render('register', { user: req.user }));

//router.get('/task', (req, res) => res.render('task', { user: req.user }));

//router.get('/new', (req, res) => res.render('NewProjectPage', { user: req.user }))
module.exports = router;