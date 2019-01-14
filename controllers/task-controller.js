var db = require("../models")

// Controller for first web-page

module.exports = function (app) {
    app.post("/api/task/:id", function (req, res) {
        console.log("add")
        db.tasks.create(req.body).then(function (dbTask) {
            res.json(dbTask);
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

    app.get("/task/:id/modal", function (req, res) {


        db.tasks.findAll({
            include: [{
                model: db.projectLog,
                required: false
            }],

            where: {
                projectId: req.params.id,
                '$projectLogs.taskId$': { $ne: null },
                '$projectLogs.userId$': req.user.id
            }
        }).then(function (dbTask) {
            res.json({
                tasks: dbTask,
                user: req.user,


            });
        });

    });




    app.delete("/api/task/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        db.projectLog.destroy({
            where: {
                taskId: req.params.id
            }
        }).then(function (dbprojectLog) {
            db.tasks.destroy({
                where: {
                    id: req.params.id
                }
            }).then(function (dbTask) {
                res.json(dbTask);
            }).catch(function (err) {
                // handle error;
                console.log("Error" + err);


            });

        })



    });



}
