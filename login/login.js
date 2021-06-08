$(document).ready(function() {
    var users = [{
        "id": 1,
        "fullName": "Test1",
        "role": "superAdmin",
        "email": "superadmin@gmail.com",
        "password": "testrole123"
    }, {
        "id": 2,
        "fullName": "Test2",
        "role": "contentEditor",
        "email": "contenteditor@gmail.com",
        "password": "testrole123"
    }, {
        "id": 3,
        "fullName": "Test3",
        "role": "editor",
        "email": "editor@gmail.com",
        "password": "testrole123"
    }, {
        "id": 4,
        "fullName": "Test4",
        "role": "user",
        "email": "user@gmail.com",
        "password": "testrole123"
    }]


    $("#login-button").click(function(e) {
        e.preventDefault();
        var loginEmail = $("#login-email").val();
        var loginPassword = $("#login-password").val();

        for (i = 0; i < users.length; i++) {
            if (loginEmail == users[i].email && loginPassword == users[i].password) {
                console.log(users[i].role + " " + users[i].fullName)
                location.href = "../index.html"

                if (users[i].role == "superAdmin") {

                    alert("superAdmin")

                } else if (users[i].role == "contentEditor") {

                    alert("contentEditor")

                } else if (users[i].role == "editor") {

                    alert("editor")

                } else if (users[i].role == "user") {
                    alert("user")
                    $(".main").css("background-color", "red")

                }
            } else {
                $('.pass-error').text("Incorrect email and password");
            }


        }
    })

    // Show hide password
    $(".social-icon-i").click(function() {
        var passwordType = $(this).parents(".input-field").find(".password").attr("type");

        if (passwordType == "password") {
            $(this).removeClass("fa-eye-slash");
            $(this).addClass("fa-eye");
            $(".password").attr("type", "text");

        } else {
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
            $(".password").attr("type", "password");
        }
    });

})