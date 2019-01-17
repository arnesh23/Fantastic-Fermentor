
var db = require("../models")


module.exports = function (app) {
   
    app.get("/myprojects", function (req, res) {
        //if user is not logged in reques to login or register
        if (req.user != null) {
            // Get all the projects in projectLog that belong to the loggedin user
            db.projects.findAll({
                include: [{
                    model: db.projectLog,
                    required: false,
                }, {
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