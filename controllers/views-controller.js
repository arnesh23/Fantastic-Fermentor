var express  = require('express');
var router = express.Router();

router.get('/', (req, res) => res.render('home', { user: req.user }));

router.get('/register', (req, res) => res.render('home', { user: req.user }));

<<<<<<< HEAD
//router.get('/task', (req, res) => res.render('task', { user: req.user }));

//router.get('/new', (req, res) => res.render('NewProjectPage', { user: req.user }))
=======

router.get('/task', (req, res) => res.render('task', { user: req.user }));

//router.get('/new', (req, res) => res.render('NewProjectPage', { user: req.user }))

>>>>>>> 01b689ec0063ccb4338ec68c2898abd73889f903
module.exports = router;