$(document).ready(function(){
    $.ajax("/task/"+id, {
        type: "Get",
       
    }).then(
        function () {

            // Reload the page to get the updated list
            location.reload();
        }
    );
  });