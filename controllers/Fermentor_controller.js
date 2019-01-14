//var express = require("express");
//var router = express.Router();

var db = require("../models")

// Controller for first web-page



module.exports = function (app) {
  app.get("/new", function (req, res) {
    if (req.user != null) {

      db.categories.findAll({}).then(function (categoriesDB) {
        db.projects.findAll({
          where: { 
          
            userId: req.user.id

        }
        }).then(function (projectsDB) {
          db.status.findAll({}).then(function (statusesDB) {

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
    } else {
      res.redirect("/login-user");
    }
  });

  app.put("/api/project/:id", function (req, res) {

    console.log("ID to PUT:" + req.params.id)
    console.log("\n===========================\n")

    db.projects.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbProject) {
        console.log("UPDATED",dbProject)
        res.json(dbProject);
      });
  });


  }

//Controller for second webpage

/*
  */
 