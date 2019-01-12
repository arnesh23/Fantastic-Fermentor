//var express = require("express");
//var router = express.Router();

var db = require("../models")

// Controller for first web-page



module.exports = function(app){
    app.get("/projectList", function(req, res) { 
   
         db.projects.findAll({}).then(function(projectsDB){

         res.render("projectList", {
              
              projects: projectsDB,
              user: req.user
          })
        })
    })
}