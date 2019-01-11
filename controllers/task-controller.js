var db = require("../models")

// Controller for first web-page

module.exports = function (app) {
    app.post("/api/task/:id", function (req, res) {
        console.log("add")
        db.tasks.create(req.body).then(function (dbTask) {
            res.json(dbTask);
        });


    });

    app.get("/task", function (req, res) {

        db.tasks.findAll(req.body).then(function (dbTask) {
            // console.log(dbTask.tasks.dataValues.id)
            res.render("task", {
                tasks: dbTask,
                user: req.user
            });

        });

      


    });

    app.get("/task/:id", function (req, res) {

        db.projects.findOne({
            where: {
                id: req.params.id
            }
        }).then(function (dbProject) {

            db.tasks.findAll({
                include: [db.projects],
                where: {
                    projectId: req.params.id
                  }
            }).then(function (dbTask) {
                

                res.render("task", {
                    tasks: dbTask,
                    user: req.user,
                    projects: dbProject

                });
            });

        });



    });

    app.delete("/api/task/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        db.tasks.destroy({
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
