// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models

var db = require("../models");

module.exports = function(app) {

    app.post("/api/user/", function(req, res) { 
      // console.log("api/posts/user"+req.body)
       db.User.create(req.body).then(function(dbUser) {
       res.json(dbUser);
    });
  });

}

