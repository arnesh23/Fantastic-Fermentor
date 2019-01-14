var db = require("../models")

// Controller for first web-page

module.exports = function (app) {
  console.log("test")
  app.post("/api/register", function (req, res) {
    console.log(req.body)
    db.projects.create(req.body).then(function (dbProjects) {
      res.json(dbProjects);
    });

  });

  app.delete("/api/project/:id", function (req, res) {

    var condition = "id = " + req.params.id;


    db.projectLog.destroy({
      where: {
        projectId: req.params.id
      }
    }).then(function (dbprojectLog) {
      db.projects.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (dbProjects) {
        res.json(dbProjects);
      })
        .catch(function (err) {
          // handle error;
          console.log("Error" + err);


        });

    })




  });


  app.get("/api/project/:id", function (req, res) {
    console.log('get called')
    var condition = "id = " + req.params.id;
    console.log(condition)

    db.projects.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbTask) {
      res.json(dbTask);
    })
      .catch(function (err) {
        // handle error;
        console.log("Error");
      });

  });

}