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
                    where: { '$projectLogs.UserId$': req.user.id },
                    required: false,
                },{
                    model: db.User,
                   
                  
                } ]
                ,  where:
                {
                    '$projectLogs.projectId$': null,
                    statusId: 1
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
        //Find all tasks to be inserted on the log
        db.tasks.findAll({
            where: {
                projectId: req.params.id
            }
        }).then(function (tasksDB) {
            //send flag to handlebars to display
            // items based on the flag
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

        db.projectLog.bulkCreate(req.body.myArray).then(function (dbProjectLog) {
            res.json(dbProjectLog);
        }).catch(function (err) {
            // handle error;
            console.log(err)
        });
    })

}