var db = require("../models")

// Controller for first web-page

module.exports = function(app){
    console.log("test")
    app.post("/api/register", function (req, res) {
        console.log(req.body)
        db.projects.create(req.body).then(function (dbProjects) {
          res.json(dbProjects);
        });

      });

        app.delete("/api/project/:id", function (req, res) {
          console.log('delete called')
          var condition = "id = " + req.params.id;
          console.log(condition)
      
          db.projects.destroy({
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
   

      app.get("/api/project/:id", function (req, res) {
        console.log('get called')
        var condition = "id = " + req.params.id;
        console.log(condition)
    
    
      });
}