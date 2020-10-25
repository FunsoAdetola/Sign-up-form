
$(document).ready(function(){
  $("#form").validate({
    rules: {
      firstname : {
        required: true,
      },
      lastname : {
        required: true,
      },
      email: {
        required: true,
        email: true
      },
      password : {
        required: true,
      },
    },
    messages: {
     firstname: {
        required: "First name cannot be empty"
     },
     lastname: {
       required: "Last name cannot be empty",
     },
     email: {
       required: "Email cannot be empty",
       email: "Looks like this is not an email"
     },
     password: {
       required: "Password cannot be empty",
     }
   }
  });
});
