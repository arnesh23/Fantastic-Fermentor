//var express = require("express");
//var router = express.Router();

var db = require("../models")

// Controller for first web-page



module.exports = function (app) {
    app.get("/projectList", function (req, res) {
        if (req.user != null) {
            db.projects.findAll({

                include: [{
                    model: db.projectLog,
                    where:
                    {
                        '$projectLogs.UserId$': req.user.id

                    },
                    required: false,

                },


                ], where:
                {
                    '$projectLogs.projectId$': null

                },


            }).then(function (projectsDB) {

                res.render("projectList", {

                    projects: projectsDB,
                    user: req.user
                })
            })
        } else {
            res.redirect("/login-user");
        }
    })

    app.get("/project/:id/projectLog", function (req, res) {

        db.tasks.findAll({
            where: {
                projectId: req.params.id
            }
        }).then(function (tasksDB) {
            var clone = true;
            res.render("partials/tasks/tasks-block", {

                tasks: tasksDB,
                user: req.user,
                clone: clone,
                projectId: req.params.id
            })
        })
    })

    app.post("/projectList/projectLog/:id", function (req, res) {

        // console.log(JSON.parse(req.body))
        console.log("ID PROJECT" + req.params.id)

        // console.log("Keys" + keys);
        db.projectLog.bulkCreate(req.body.myArray).then(function (dbProjectLog) {
            //uncomment this to have 
            console.log("entra");
            res.json(dbProjectLog);


        }).catch(function (err) {
            // handle error;
            console.log(err)
        });


    })

}