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

  $(".delbtn").on("click", function (event) {
    console.log("cliked delete")
    //event.preventDefault();
    console.log(this)
    var id = $(this).data('id')

    //console.log("id of delete click"+$(this).data('id'))
    //console.log($(this).id)
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
    console.log("cliked update")
    //event.preventDefault();
    console.log(this)
    var id = $(this).data('id')

    //console.log("id of delete click"+$(this).data('id'))
    //console.log($(this).id)
    // Send the PUT request.
    $.ajax("/api/project/" + id, {
        type: "GET"
    }).then(function (results) {
            //console.log(results)
            console.log("result"+results);
            console.log("id"+results.id);
            console.log("Name"+results.name)

            $("#projectName").val(results.name)
            $("#pictureURL").val(results.picture)
            $("#ginstructions").val(results.instructions)
            // Reload the page to get the updated list
            //location.reload();
        }
    );
  })

})

