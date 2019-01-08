
//to post request to user when submit click
$('#submitButton').on("click", function (page) {
  //ajax Post Request to User Model

  var newUser = {
      firstName: $("#FirstName").val().trim(),
      lastName: $("#LastName").val().trim(),
      email: $("#email").val().trim(),
      password: $("#password").val().trim()
    };

    console.log(newUser)

  $.ajax({
      method: "POST",
      url: "/api/user/",
      data: newUser
    }).then()

  })



