$(function () {
  var updateId = 0;   //updateId for PUT Request

  $(document).on("submit", ".submitButton", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    // newProject object based on user inputs
    var newProject = {
      name: $("#projectName").val().trim(),
      picture: $("#pictureURL").val().trim(),
      instructions: $("#ginstructions").val().trim(),
      categoryId: $("#customersList option:selected").val(),
      UserId: $("#userid").val(),
      statusId: $("#statusList option:selected").val()
      //
    };

    var hiddenValue = $("#hiddenid").attr("value")

    if (hiddenValue === "1") {                     // If update is clicked do a PUT request

      id = $("#hiddenid").attr("value")
      $.ajax("/api/project/" + updateId, {
        type: "PUT",
        data: newProject
      }).then(function (results) {

        location.reload();
        $("#hiddenid").val(0)

      });
    } else {                                       // Else do a POST request
      console.log("Add new")
      // Send the POST request.
      $.ajax("/api/register", {
        type: "POST",
        data: newProject
      }).then(function () {
        // Reload the page to get the updated list
        location.reload();
      });
    }
  });


  $("#addTask").on("click", function (event) {
    $("#addTask").on("click", function (event) {
      res.render("task", {})
    });
    window.location = "/task/";
  })

  $(".delbtn").on("click", function (event) {           //Do a Delete Request on Delete Button Click

    event.preventDefault();

    var id = $(this).data('id')


    // Send the PUT request.
    $.ajax("/api/project/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("delete");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })

  //On click update button on create project /new show a modal
  $(".updatebtn").on("click", function (event) {

    $('#modal').toggle();

    var id = $(this).data('id')
    updateId = $(this).data('id')

    hiddenValue = $("#hiddenid").attr("value")
    $("#hiddenid").val(1)

    $(".create-form").append("<input type=hidden id=hiddenid name=hiddenid value=1>")
    $(".create-form").append("<input type=hidden id=hiddenid name=hiddenid value=1>")

    $.ajax("/api/project/" + id, {
      type: "GET"
    }).then(function (results) {

      $("#projectName").val(results.name)
      $("#pictureURL").val(results.picture)
      $("#ginstructions").val(results.instructions)
      $("#customersList").val(results.categoryId)
      $("#statusList").val(results.statusId)

    })
  })
  $("#addProject").on("click", function (event) {
    $('#modal').show();
  })

  $(".close").on("click", function (event) {
    $('#modal').toggle();
  })

  $("#closeButton").on("click", function (event) {
    $('#modal').toggle();
  })

})