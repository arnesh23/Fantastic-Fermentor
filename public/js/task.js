

$(function() {

//Create New Burger
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
            projectId: $("#idProject").val()
        };

        // Send the POST request.
        $.ajax("/api/task", {
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
})