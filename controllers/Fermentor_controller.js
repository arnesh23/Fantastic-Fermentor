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

         db.projects.findAll({
            // include: [db.categories]
         }).then(function(projectsDB){
          projectsDB = {
            name: "blah",
            //instructions: "do this do that",
            //actions: "null"
        }
        
            //console.log("categories:"+categoriesDB+"projects"+projectsDB)
              res.render("NewProjectPage", {
                categories: categoriesDB,
                projects: projectsDB
            })
         })
       }) 
  });
}

//Controller for second webpage

/*
  */