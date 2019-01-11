var db = require("../models")

// Controller for first web-page

module.exports = function (app) {
    // app.post("/api/log/:id", function (req, res) {
    //     console.log("post log")
    //     db.projectLog.create(req.body).then(function (dbTask) {
    //         res.json(dbTask);
    //     });
    // });

    app.get("/log", function (req, res) {

        db.tasks.findAll(req.body).then(function (dbTask) {
            // console.log(dbTask.tasks.dataValues.id)
            res.render("task", {
                tasks: dbTask,
                user: req.user
            });

        });

      


    });

    // app.get("/log/:id", function (req, res) {
    //     db.projects.findOne({
    //         where: {
    //             id: req.params.id
    //         }
    //     }).then(function (dbProject) {
    //         db.tasks.findAll({
    //             include: [db.projects],
    //             where: {
    //                 projectId: req.params.id
    //               }
    //         }).then(function (dbTask) {
    //             res.render("task", {
    //                 tasks: dbTask,
    //                 user: req.user,
    //                 projects: dbProject
    //             });
    //         });
    //     });
    // });

    



}
