//var express = require("express");
//var router = express.Router();

var db = require("../models")

// Controller for first web-page



module.exports = function (app) {
    app.get("/myprojects", function (req, res) {
        console.log("LLEGA");
        console.log(req.user.id)
        db.projects.findAll({
            include: [{
                model: db.projectLog,
                required: false,
            }
            ], where: {

                '$projectLogs.userId$': req.user.id
            }



        }).then(function (projectsDB) {
            //console.log(projectsDB)
            
           
            res.render("projectList", {

                projects: projectsDB,
                user: req.user,
                viewMy: true
            })
            //res.json(projectsDB);
        })
    })


}