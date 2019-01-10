$(function() {

//Create New Burger
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

 
        var newTask = {
            taskNumber: $("#taskNumber").val().trim(),
            name: $("#name").val().trim(),
            description: $("#description").val().trim(),
            picture: $("#picture").val().trim(),
            timeSinceLastStep: $("#time").val().trim(),
            timeUnits: $("#timeUnit").val(),
            duration: $("#duration").val().trim(),
            cookingHardware:  $("#hardware").val(),
            ingredients:  $("#ingredients").val(),
            steps:  $("#steps").val(),
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
})