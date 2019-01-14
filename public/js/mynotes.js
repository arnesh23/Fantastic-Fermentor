$(function () {
   $(".modalShow").on("click", function (page) {


        var id = $(this).attr("data-id");
        var projectName = $(this).attr("data-name");
        console.log("id", id)
        $.ajax("task/" + id + "/modal", {
            type: "get",

        }).then(function (response) {
            console.log("test")
            // Reload the page to get the updated list
            //console.log(response.tasks)
            var tasks = response.tasks
           // console.log(response)
            //console.log(response.projectLogs.note);
            var htmlModal ="";
            console.log(tasks.length);
            for (i=0;i<tasks.length;i++) {


                var taskDetail=tasks[i]
                console.log(taskDetail.projectLogs[0].note)
                console.log("Spec: " + taskDetail.taskNumber);

                var htmlTaskTitle = "<b>" + taskDetail.taskNumber + "- " + taskDetail.name + "</b><br>" 
                var htmlTaskDetails = taskDetail.description + "<br>" +
                "<b>Time Scince last Step: </b>" + taskDetail.timeSinceLastStep + " " + taskDetail.timeUnits + "<br>" +
                "<b>Duration:</b>" + taskDetail.duration + "<br>" +
                "<b>Cooking Hardware:</b> <br>" + taskDetail.cookingHardware + "<br>" +
                "<b>Ingredients:</b><br>" + taskDetail.ingredients + "<br>" +
                "<b>Steps:</b><br>" + taskDetail.steps + "<br>"  + "<b>My Note: </b> <br>" + taskDetail.projectLogs[0].note + "<br><hr>"
                htmlModal+=htmlTaskTitle + htmlTaskDetails  


            }


            console.log("Modal Html") + htmlModal;
            $("#taskDetail" +id).html(htmlModal);
            $('#exampleModal'+id).modal('toggle');
            $('#exampleModal'+id).modal('show');
            // var source = "{{> tasks/tasks-block" + tasks + "}}";
            //   var template = Handlebars.compile(source);

            //$(".modal-body").append(template);

            //$('.modal-body').append("{{> tasks/tasks-block tasks }}" ).text()
            //$('#exampleModal').modal('toggle');
            //$('#exampleModal').modal('show');

        });

    });
})