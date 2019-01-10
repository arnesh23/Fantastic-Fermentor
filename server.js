// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var path = require('path');
var exphbs = require('express-handlebars');
// Sets up the Express App
// =============================================================
var app = express();

app.use(express.static('public'));
//app.set('public', path.join(__filename, "photos"));


app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.set('port', (process.env.PORT || 8080));
app.get('/', function(req, res) {
  res.render('home', {
    content: 'This is some content',
    published: true
  });
});

app.listen(app.get('port'), function() {
  console.log('Servers started on port' + app.get('port'));
});
