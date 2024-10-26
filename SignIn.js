// ValidateSignUP
$(document).ready(function () {

    $('#myForm').click(function (e) {
        e.preventDefault()
        $('.error').text('')
        let email = $('#email').val();
        let password = $('#password').val();
        let confirmPass = $('#confirmPass').val();
        let birthday = $('#birthday').val();
        let country = $('#country').val();
        let first = $('#first').val();
        let last = $('#last').val();
        let address = $('#address').val();
        let city = $('#city').val();
        let state = $('#state').val();
        let zip = $('#zip').val();
        let num = $('#num').val();
        let emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
        let passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/

        let isValid = true;

        if(!email){
            $('#emailErr').text('Email is required')
            isValid = false;
        } else if (!emailRegex.test(email)){
            $('#emailErr').text('Please Input a Valid Email Address')
            isValid = false;
        } else {
            $('#emailErr').text('')
            isValid = true;
        }
        if(password !== confirmPass){
            $('#passwordErr').text("Password doesn't match")
            isValid = false;
        } else if (!passRegex.test(password)){
            $('#confirmPassErr').text("Password must include 1-9, A-Z, a-z and !")
            isValid = false;
        }
        else {
            $('#confirmPassErr').text("")
            isValid = true;
        }
        if(!birthday){
            $('#birthdayErr').text("Please fill in detail")
            isValid = false;
        } else {
            $('#birthdayErr').text("")
            isValid = true;
        }
        if(!country){
            $('#countryErr').text('Please select a country from the list')
            isValid = false;
        }  else {
            $('#countryErr').text('')
            isValid = true;
        }
        if(!first){
            $('#firstErr').text('Please fill out this field')
            isValid = false;
        }  else {
            $('#firstErr').text('')
            isValid = true;
        }
        if(!last){
            $('#lastErr').text('Please fill out this field')
            isValid = false;
        }  else {
            $('#lastErr').text('')
            isValid = true;
        }
        if(!address){
            $('#addressErr').text('Please fill out this field')
            isValid = false;
        }  else {
            $('#addressErr').text('')
            isValid = true;
        }
        if(!city){
            $('#cityErr').text('Please fill out this field')
            isValid = false;
        }  else {
            $('#cityErr').text('')
            isValid = true;
        }
        if(!state){
            $('#stateErr').text('Please select an item in the list')
            isValid = false;
        }  else {
            $('#stateErr').text('')
            isValid = true;
        }
        if(!zip){
            $('#zipErr').text('Please fill out this field')
            isValid = false;
        }  else {
            $('#zipErr').text('')
            isValid = true;
        }
        if(!num){
            $('#numErr').text('Please fill out this field')
            isValid = false;
        }  else {
            $('#numErr').text('')
            isValid = true;
        }

        if (isValid === true) {
            $.ajax({
              url: "https://ecommerce.reworkstaging.name.ng/v2/merchants",
              type: "POST",
              contentType: "application/json",
              data: JSON.stringify({
                first_name: first,
                last_name: last,
                // store_name: store_name,
                password: password,
                email: email,
                phone: num,
                // descp: descp,
              }),

              success: function (res) {
                console.log(res);
                $(document).ready(function () {
                    $("#btn1").click(function () {
                        alert('form submitted successfully')
                      location.replace("signIn.html");
                    });
                  });
              },
              error: function (error) {
                console.log(error);
              },
            });
          }
    })
})

// Show/Hide?PassWord
$(document).ready(function(){
    $('#showPass').click(function(){
    $(this).is(':checked') ? $('#password').attr('type', 'text') : $('#password').attr('type', 'password');
    })
    $('#showPass').click(function(){
    $(this).is(':checked') ? $('#confirmPass').attr('type', 'text') : $('#confirmPass').attr('type', 'password');
    })

});

// dropDown NAV
document.querySelector(".fa-user").addEventListener('click', function(){
    document.querySelector(".ddc").classList.toggle("show")
})
document.querySelector(".fa-angle-down").addEventListener('click', function(){
    document.querySelector(".dropdownitems").classList.toggle("show")
})
const nav = document.querySelector(".nav");
const dropdownNav = document.querySelector("#reveal");

const scrollThreshold = 330;
const bufferZone = 330;

let isScrolled = false;

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;

  if (scrollTop > scrollThreshold && !isScrolled) {

    nav.classList.add("hide");

    dropdownNav.classList.add("show");

    isScrolled = true;
  } else if (scrollTop <= scrollThreshold - bufferZone && isScrolled) {

    nav.classList.remove("hide");

    dropdownNav.classList.remove("show");

    isScrolled = false;
  }
});
