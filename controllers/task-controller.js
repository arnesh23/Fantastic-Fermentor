var db = require("../models")

// Controller for first web-page

module.exports = function (app) {
    app.post("/api/task", function (req, res) {
        db.tasks.create(req.body).then(function (dbTask) {
            res.json(dbTask);
        });


    });

    app.get("/task", function (req, res) {
        console.log("entra");
        db.tasks.findAll(req.body).then(function (dbTask) {
           // console.log(dbTask.tasks.dataValues.id)
            res.render("task", {
                tasks: dbTask

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
