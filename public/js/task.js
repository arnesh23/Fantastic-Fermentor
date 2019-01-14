

$(function() {


$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
   event.preventDefault();
    var hardware = ""
    $('.cook').each(function(index, element) {
        //test
        console.log($(element).val())
        hardware += index + "." + $(element).val() + "<br>"

    });

    var ingredients = ""
    $('.eachStep').each(function(index, element) {
        //test
        console.log($(element).val())
        ingredients += index + "." + $(element).val() + "<br>"

    });

    var steps = ""
    $('.eachIng').each(function(index, element) {
        //test
        console.log($(element).val())
        steps += index + "." + $(element).val() + "<br>"

    });

    
    var projectID=$("#idProject").val()
    console.log (hardware);
        var newTask = {
            taskNumber: $("#taskNumber").val().trim(),
            name: $("#name").val().trim(),
            description: $("#description").val().trim(),
            picture: $("#picture").val().trim(),
            timeSinceLastStep: $("#time").val().trim(),
            timeUnits: $("#timeUnit").val(),
            duration: $("#duration").val().trim(),
           
           cookingHardware:  hardware,
            ingredients: ingredients,
            steps:  steps,
            projectId: projectID
        };

        // Send the POST request.
        $.ajax("/api/task/"+projectID, {
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
            console.log("delete");
            // Reload the page to get the updated list
            location.reload();
        }
    );
});


$("#btnCooking").click( function (event) {
    // Make sure to preventDefault on a submit event.
    //event.preventDefault();
    
 
    $("#opCooking").append("<br><input type=text class=cook>");


    
});
$("#btnIngredients").click( function (event) {
    // Make sure to preventDefault on a submit event.
    //event.preventDefault();
 
 
    $("#opIngredients").append("<br><input type=text class=eachIng>");


    
});
$("#btnSteps").click( function (event) {
    // Make sure to preventDefault on a submit event.
    //event.preventDefault();
    
 
    $("#opSteps").append("<br><input type=text class=eachStep>");


    
});


$(".clone-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    console.log("LOG")
    var arrayLog=[];
    var project_id=$("#idProject").val();
    console.log("project" + project_id);
    $('.notes').each(function (index, element) {
        //test
        console.log("Elment: " + $(element).val())

        console.log("ID Task: " + $(this).data("attr"))
        
       arrayLog.push( {
            projectId: project_id,
            UserId: $("#idUser").val(),
            taskId: $(this).data("attr"),
            note: $(element).val()
        });

        //arrayLog.push(newLog);


    });


    console.log(arrayLog)

    // Send the POST request.
    $.ajax("/projectList/projectLog/" + project_id , {
        type: "POST",
        dataType: 'json',
        data: {'myArray': arrayLog}
        //data: JSON.stringify(arrayLog)
    }).then(
        function () {

            // Reload the page to get the updated list
            //location.reload();
            location.href="/myprojects"
        }
    );

});


})