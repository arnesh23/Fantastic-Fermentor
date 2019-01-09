//var express = require("express");
//var router = express.Router();

var db = require("../models")

// Controller for first web-page

module.exports = function(app){
    app.get("/new", function(req, res) { 
      // console.log("api/posts/user"+req.body)
       db.categories.findAll({}).then(function(categoriesDB){
           console.log("categories"+categoriesDB);

           res.render("NewProjectPage", {categories: categoriesDB},)
       }) 
  });

  app.get("/new", function(req, res) { 
    // console.log("api/posts/user"+req.body)
     db.categories.projects({}).then(function(projectDB){
         console.log("categories"+categoriesDB);
         res.render("NewProjectPage", {categories: categoriesDB})
     }) 
});

  

  


}

//Controller for second webpage