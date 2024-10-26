
$(document).ready(function () {
    $("#myForm").on("submit", function (e) {
      e.preventDefault();
      
  
      let email = $("#email").val();
      let password = $("#password").val();
      let isValid = true;
  
      if (email === "") {
        $("#emailErr").html("Email is required");
        isValid = false;
      } else {
        $("#emailErr").html("");
        isValid = true;
      }
  
      if (password === "") {
        $("#passwordErr").html("Password is required");
        isValid = false;
      } else {
        $("#passwordErr").html("");   
        isValid = true;
      }
  
      if (isValid === true) {
        $.ajax({
          url: "http://ecommerce.reworkstaging.name.ng/v2/merchants/login",
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify({
            password: password,
            email: email,
          }),
  
          success: function (res) {
            let merchantId = res.id;
            console.log(merchantId)
            let passwordId = res.password;
            let emailId = res.email;
            localStorage.setItem("user", merchantId);
            let email = $("#email").val();
            let password = $("#password").val();
            
            if (email === emailId || password === passwordId) {
              location.replace("index.html");
            }else{
                alert('Email or Password is Incorrect')
            }
            
          },
          error: function (error) {
            console.log(error);
          },
        });
      }
    });
  });