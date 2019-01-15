var db = require("../models")

// Controller for first web-page

module.exports = function (app) {
  console.log("test")
  app.post("/api/register", function (req, res) {
    console.log(req.body)
    db.projects.create(req.body).then(function (dbProjects) {

       // using SendGrid's v3 Node.js Library
            // https://github.com/sendgrid/sendgrid-nodejs
            var sgMail = require('@sendgrid/mail');
            sgMail.setApiKey
            (process.env.SENDGRID_API_KEY);
            console.log ("KEY" , sgMail);
            var msg = {
                to: req.user.email,
                from: 'vivian.aguilar@gmail.com',
                subject: 'Fermentor - You have created a new project ' + dbProjects.name,
                text: ' ',
                html: '<div><a href=https://fermentor.herokuapp.com/> <img src=https://fermentor.herokuapp.com/photos/logo.png  alt=logo" width=17% height=27% ></a></div>Thank`s for creating a new project in <strong><a href=https://fermentor.herokuapp.com> Fermentor </a>.<br></strong> You can see other people projects <a href=https://fermentor.herokuapp.com/projectlist>here</a><strong>'
            };
            sgMail.send(msg);
           // sgMail.send(msg);
            console.log("Message" + msg);
      res.json(dbProjects);
    });

  });

  app.delete("/api/project/:id", function (req, res) {

    var condition = "id = " + req.params.id;


    db.projectLog.destroy({
      where: {
        projectId: req.params.id
      }
    }).then(function (dbprojectLog) {
      db.projects.destroy({
        where: {
          id: req.params.id
        }
      }).then(function (dbProjects) {
        res.json(dbProjects);
      })
        .catch(function (err) {
          // handle error;
          console.log("Error" + err);


        });

    })




  });


  app.get("/api/project/:id", function (req, res) {
    console.log('get called')
    var condition = "id = " + req.params.id;
    console.log(condition)

    db.projects.findOne({
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

  app.put("/api/project/:id", function (req, res) {
  
    console.log("ID to PUT:" + req.params.id)
    console.log("\n===========================\n")

    db.projects.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(function (dbProject) {
        console.log("UPDATED",dbProject)
        res.json(dbProject);
      });
  });


  
}

