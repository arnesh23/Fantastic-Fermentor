$(function () {
   $(".modalShow").on("click", function (page) {
       //Get the project id 
        var id = $(this).attr("data-id");
        var projectName = $(this).attr("data-name");
        
        //call the code to get the task info of the project
        $.ajax("task/" + id + "/modal", {
            type: "get",
        }).then(function (response) {
          //set the pointers for tasks .. we are geting a Json
            var tasks = response.tasks
            //set the pointer to store the html format to be displayed on the modal
            var htmlModal ="";
            for (i=0;i<tasks.length;i++) {
                var taskDetail=tasks[i]
                var htmlTaskTitle = "<b>" + taskDetail.taskNumber + "- " + taskDetail.name + "</b><br>" 
                var htmlTaskDetails = taskDetail.description + "<br>" +
                "<b>Time Scince last Step: </b>" + taskDetail.timeSinceLastStep + " " + taskDetail.timeUnits + "<br>" +
                "<b>Duration:</b>" + taskDetail.duration + "<br>" +
                "<b>Cooking Hardware:</b> <br>" + taskDetail.cookingHardware + "<br>" +
                "<b>Ingredients:</b><br>" + taskDetail.steps + "<br>" +
                "<b>Steps:</b><br>" + taskDetail.ingredients + "<br>"  + "<b>My Note: </b> <br>" + taskDetail.projectLogs[0].note + "<br><hr>"
                htmlModal+=htmlTaskTitle + htmlTaskDetails  
         }
            $("#taskDetail" +id).html(htmlModal);
            $('#exampleModal'+id).modal('toggle');
            $('#exampleModal'+id).modal('show');
         });

    });
})