

var db = require("../models")


module.exports = function (app) {
  //Get all the projects for management
  app.get("/project-management", function (req, res) {
    if (req.user != null) {

      db.categories.findAll({}).then(function (categoriesDB) {
        db.projects.findAll({
          where: { 
            userId: req.user.id

        }
        }).then(function (projectsDB) {
          db.status.findAll({}).then(function (statusesDB) {
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
