//var express = require("express");
//var router = express.Router();

var db = require("../models")

// Controller for first web-page



module.exports = function (app) {
  app.get("/project-management", function (req, res) {
    if (req.user != null) {

      db.categories.findAll({}).then(function (categoriesDB) {
        db.projects.findAll({
          where: { 
          
            userId: req.user.id

        }
        }).then(function (projectsDB) {
          db.status.findAll({}).then(function (statusesDB) {

            //console.log("categories:"+categoriesDB+"projects"+projectsDB)
            res.render("projectManagement", {
              categories: categoriesDB,
              projects: projectsDB,
              statuses: statusesDB,
              user: req.user
            })
          })
        })
      })
    } else {
      res.redirect("/login-user");
    }
  });

  app.get("/", function (req, res) {

  })
}
//Controller for second webpage

/*
  */