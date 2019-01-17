$(function () {
  //Display login or register form baseed on the route
  if (window.location.pathname === '/login-user') {
    $('.signup-form').remove()
    $('.login').on('click', login);
  }

  if (window.location.pathname === '/register-user') {
    $('.login-form').remove()
    $('.signup').on('click', signup);
  }

  if ($('.logout').length) {
    $('.logout').on('click', logout);
  }
})

//check valid input
function validInput(names) {
  for (let i = 0; i < names.length; i++) {
    if (!$('[name="' + names[i] + '"]').val()) {
      return false;
    }
  }
  return true;
}

//Login the user, set the cookie and auth token
function login(e) {
  e.preventDefault();
  if (!validInput(['username', 'password'])) return;
  $.ajax('/login-user', {
    method: 'POST',
    data: {
      username: $('[name="username"]').val(),
      password: $('[name="password"]').val()
    }
  }).then(({ user, authToken }) => {
    $.cookie('auth_token', authToken.token, { expires: 7 });
    if (!user) throw new Error('invalid username or password');
    window.location.reload()
  }).catch((err) => alert(err.responseText))
}

//Sign op the user, set the cookie and set the token
function signup(e) {
  e.preventDefault();
  if (!validInput(['username', 'password', 'email'])) return;
  $.ajax('/register', {
    method: 'POST',
    data: {
      username: $('[name="username"]').val(),
      email: $('[name="email"]').val(),
      password: $('[name="password"]').val()
    }
  }).then(({ user, authToken }) => {
    if (user && authToken.token) {
      $.cookie('auth_token', authToken.token, { expires: 7 });
      window.location = '/'
    } else {
      throw new Error('something went wrong')
    }
  }).catch((err) => alert(err.responseText))
}

//Logout User remove the token from database
function logout(e) {
  e.preventDefault();
  $.ajax('/logout', {
    method: 'DELETE',
    data: {}
  }).then(user => {
    $.removeCookie('auth_token');
    window.location.reload()
  })
}