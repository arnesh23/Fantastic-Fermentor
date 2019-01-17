var db = require("../models")

module.exports = function (app) {
    app.get("/projectList", function (req, res) {
        if (req.user != null) {
           
            //Get all the list of projects that does not belong to him Left Outer Join where Null
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
        //Find all tasks to be inserted on the projectLog of the user
        db.tasks.findAll({
            where: {
                projectId: req.params.id
            }
        }).then(function (tasksDB) {
            //send flag to handlebars to display
            // items based on the flag
            var clone = true;
            //Render a partial that is used in /tasks 

            res.render("partials/tasks/tasks-block", {

                tasks: tasksDB,
                user: req.user,
                clone: clone,
                projectId: req.params.id
            })
        })
    })

    //Create the project log of the user
    app.post("/projectList/projectLog/:id", function (req, res) {

        db.projectLog.bulkCreate(req.body.myArray).then(function (dbProjectLog) {
            res.json(dbProjectLog);
        }).catch(function (err) {
            // handle error;
            console.log(err)
        });
    })

}