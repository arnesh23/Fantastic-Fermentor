

$(function () {

    // On submit new tasks to a project..
    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var hardware = ""
        //Get the items from the cooking hardaware textboxes
        $('.cook').each(function (index, element) {
            if ($(element).val().trim() != "") {
                hardware += index + "." + $(element).val() + "<br>"
            }
        });
        //Get the items from the ingredients textboxes
        var ingredients = ""
        $('.eachStep').each(function (index, element) {
            if ($(element).val().trim() != "") {
                ingredients += index + "." + $(element).val() + "<br>"
            }

        });
        //Get the items from the steps textboxes
        var steps = ""
        $('.eachIng').each(function (index, element) {
            if ($(element).val().trim() != "") {
                steps += index + "." + $(element).val() + "<br>"
            }
        });


        var projectID = $("#idProject").val()

        var newTask = {
            taskNumber: $("#taskNumber").val().trim(),
            name: $("#name").val().trim(),
            description: $("#description").val().trim(),
            picture: $("#picture").val().trim(),
            timeSinceLastStep: $("#time").val().trim(),
            timeUnits: $("#timeUnit").val(),
            duration: $("#duration").val().trim(),

            cookingHardware: hardware,
            ingredients: ingredients,
            steps: steps,
            projectId: projectID
        };

        // Send the POST request. to insert a task to the db
        $.ajax("/api/task/" + projectID, {
            type: "POST",
            data: newTask
        }).then(
            function () {

                // Reload the page to get the updated list
                location.reload();
            }
        );

    });

    //Delete Task
    $(".delete").on("click", function (event) {
        var id = $(this).data("id");
        // Send the PUT request.
        $.ajax("/api/task/" + id, {
            type: "DELETE"
        }).then(
            function () {
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    //Adding textboxes to add new info for cooking hardware
    $("#btnCooking").click(function (event) {
        $("#opCooking").append("<input type=text class=\"cook mt-1\"><br>");
    });


    //Adding textboxes to add new info for ingredientes
    $("#btnIngredients").click(function (event) {
        $("#opIngredients").append("<input type=text class=\"eachIng mt-1\"><br>");
    });


    //Adding textboxes to add new info for steps
    $("#btnSteps").click(function (event) {
        $("#opSteps").append("<input type=text class=\"eachStep mt-1\"> <br>");

    });

    //When click /projectlist "use this project" , add notes to my project
    $(".clone-form").on("submit", function (event) {
        event.preventDefault();
        
        var arrayLog = [];
        var project_id = $("#idProject").val();
        //Have an array of objects 
        $('.notes').each(function (index, element) {
            arrayLog.push({
                projectId: project_id,
                UserId: $("#idUser").val(),
                taskId: $(this).data("attr"),
                note: $(element).val()
            });
        });

        // Send the POST request. with the array to bulk insertion
        $.ajax("/projectList/projectLog/" + project_id, {
            type: "POST",
            dataType: 'json',
            data: { 'myArray': arrayLog }
            //data: JSON.stringify(arrayLog)
        }).then(
            function () {
                location.href = "/myprojects"
            }
        );
    });


})