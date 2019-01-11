$(function () {

  $(".submitButton").on("click", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();


    var newProject = {
      name: $("#projectName").val().trim(),
      picture: $("#pictureURL").val().trim(),
      instructions: $("#ginstructions").val().trim(),
      categoryId: $("#customersList option:selected").val(),
      UserId: $("#userid").val(),
      statusId: $("#statusList option:selected").val()
      //
    };


    console.log("jquery" + $("#userid").val())

    console.log(newProject)

    // Send the POST request.
    $.ajax("/api/register", {
      type: "POST",
      data: newProject
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });


  $("#addTask").on("click", function (event) {
    res.render("task", {})
  });

})
