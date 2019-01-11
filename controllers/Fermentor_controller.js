//var express = require("express");
//var router = express.Router();

var db = require("../models")

// Controller for first web-page



module.exports = function(app){
    app.get("/new", function(req, res) { 
      // console.log("api/posts/user"+req.body)
       db.categories.findAll({}).then(function(categoriesDB){
          // console.log("categories"+categoriesDB);
         //  res.render("NewProjectPage", {categories: categoriesDB},)

         db.projects.findAll({}).then(function(projectsDB){

          db.status.findAll({}).then(function(statusesDB){

            //console.log("categories:"+categoriesDB+"projects"+projectsDB)
            res.render("NewProjectPage", {
              categories: categoriesDB,
              projects: projectsDB,
              statuses: statusesDB,
              user: req.user
          })
          })      
         })
       }) 
  });
}
//Controller for second webpage

/*
  */