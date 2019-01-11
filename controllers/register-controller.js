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
}