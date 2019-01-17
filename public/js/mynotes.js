$(function () {
    //In /myprojects when click View My notes show a modal
    $(".modalShow").on("click", function (page) {
        //Get the project id to from the project we want to loas modal info
        var id = $(this).attr("data-id");


        //Get the task info from the project
        $.ajax("task/" + id + "/modal", {
            type: "get",
        }).then(function (response) {
            //get the tasks from the response 
            var tasks = response.tasks

            //pointer to store the format of the html to be displayed at the modal
            var htmlModal = "";

            //iterate through the tasks
            for (i = 0; i < tasks.length; i++) {
                var taskDetail = tasks[i]
                var htmlTaskTitle = "<b>" + taskDetail.taskNumber + "- " + taskDetail.name + "</b><br>"
                var htmlTaskDetails = taskDetail.description + "<br>" +
                    "<b>Time Scince last Step: </b>" + taskDetail.timeSinceLastStep + " " + taskDetail.timeUnits + "<br>" +
                    "<b>Duration:</b>" + taskDetail.duration + "<br>" +
                    "<b>Cooking Hardware:</b> <br>" + taskDetail.cookingHardware + "<br>" +
                    "<b>Ingredients:</b><br>" + taskDetail.steps + "<br>" +
                    "<b>Steps:</b><br>" + taskDetail.ingredients + "<br>" + "<b>My Note: </b> <br>" + taskDetail.projectLogs[0].note + "<br><hr>"
                htmlModal += htmlTaskTitle + htmlTaskDetails
            }
            //Send the info to the DOM
            $("#taskDetail" + id).html(htmlModal);
            $('#exampleModal' + id).modal('toggle');
            $('#exampleModal' + id).modal('show');
        });

    });
})