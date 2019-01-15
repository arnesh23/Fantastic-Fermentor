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
    console.log("hiddenValue", hiddenValue === "1")
    if (hiddenValue === "1") {                     // If update is clicked do a PUT request
      console.log("ID in put" + updateId)
      id = $("#hiddenid").attr("value")
      console.log("Put")
      // TODO: CONCATENATE CORRECT ID
      $.ajax("/api/project/" + updateId, {
        type: "PUT",
        data: newProject
      }).then(function (results) {
        console.log(results)
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
    console.log("addtaskclick")
    //     $.ajax("/task", {
    //       type: "GET",
    //   }).then(function () {
    //           // Reload the page to get the updated list
    //           //location.reload();
    //       });  

    $("#addTask").on("click", function (event) {
      res.render("task", {})
    });

    // })
    window.location = "/task/";
  })

  $(".delbtn").on("click", function (event) {           //Do a Delete Request on Delete Button Click
    //console.log("cliked delete")
    event.preventDefault();
    //console.log(this)
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

  $(".updatebtn").on("click", function (event) {
    //console.log("cliked update")
    //event.preventDefault();
    $('#modal').toggle();
    console.log(this)
    var id = $(this).data('id')
    updateId = $(this).data('id')
    console.log("updataIDDDDDD" + updateId)
    console.log("hidden value:" + $("#hiddenid").attr("value"));
    hiddenValue = $("#hiddenid").attr("value")
    $("#hiddenid").val(1)



    $(".create-form").append("<input type=hidden id=hiddenid name=hiddenid value=1>")

    //

    $(".create-form").append("<input type=hidden id=hiddenid name=hiddenid value=1>")
    //console.log("id of delete click"+$(this).data('id'))
    //console.log($(this).id)
    // Send the PUT request.


    $.ajax("/api/project/" + id, {
      type: "GET"
    }).then(function (results) {
      //console.log(results)


      $("#projectName").val(results.name)
      $("#pictureURL").val(results.picture)
      $("#ginstructions").val(results.instructions)
      $("#customersList").val(results.categoryId)
      $("#statusList").val(results.statusId)

      // Reload the page to get the updated list
      //location.reload();

      console.log("hiddenValues:" + $("#hiddenid").attr("value"))
    })
  })
  $("#addProject").on("click", function (event) {
      console.log("addProjectclicked")
      $('#modal').show();
  })
  
  $(".close").on("click", function (event) {
    console.log("addProjectclicked")
    $('#modal').toggle();
})

$("#closeButton").on("click", function (event) {
  console.log("addProjectclicked")
  $('#modal').toggle();
})





})