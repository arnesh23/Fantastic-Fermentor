var db = require("../models")

// Controller for first web-page

module.exports = function(app){
    app.post("/api/tasks", function (req, res) {
        db.tasks.create(req.body).then(function (dbTask) {
          res.json(dbTask);
        });
    
    
      });


}
