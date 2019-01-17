// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
require('dotenv').config()
var express = require("express");
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var customAuthMiddleware = require('./middleware/custom-auth-middleware');
var app = express();
var PORT = process.env.PORT || 8080;

var db = require("./models")

// Sets up the Express app to handle data parsing


// Express middleware that allows POSTing data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Static directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(customAuthMiddleware);

app.set('views', path.join(__dirname, '/views'));
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  extname: '.handlebars',
  layoutsDir: 'views/layouts'
}));
app.set('view engine', 'handlebars');


// controller imports
var userController = require('./controllers/user-controller');
var viewsController = require('./controllers/views-controller');

// hook up our controllers
app.use(userController);
app.use(viewsController);

// Routes
// =============================================================

require('./controllers/user-controller');
require('./controllers/views-controller');
require("./controllers/task-controller.js")(app);
require("./controllers/register-controller.js")(app);
require("./controllers/Fermentor_controller.js")(app);
require("./controllers/projectList-controller.js")(app);
require("./controllers/myprojects-controller.js")(app);
require("./controllers/projectManagement_controller.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({ force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
