//var express = require("express");
//var router = express.Router();

var db = require("../models")

// Controller for first web-page



module.exports = function (app) {
    app.get("/myprojects", function (req, res) {

        console.log(req.user);
        if (req.user != null) {
            // your code here.

            db.projects.findAll({
                include: [{
                    model: db.projectLog,
                    required: false,
                },{
                    model: db.User,
                   
                  
                }
                ], where: { '$projectLogs.userId$': req.user.id }

            }).then(function (projectsDB) {
                res.render("projectList", {
                    projects: projectsDB,
                    user: req.user,
                    viewMy: true
                })

            }).catch(function (err) {
                // handle error;
                console.log("Error" + err);
            });
        } else {
            res.redirect("/login-user");
        }
    })



}