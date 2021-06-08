$(document).ready(function() {

    $("#sign-up-form").submit(function(e) {
        e.preventDefault();
        var registerFullName = $("#register-fullName").val();
        var registerEmail = $("#register-email").val();
        var registerPassword = $("#register-password").val();
        var registerConfirmPassword = $("#register-confirmPassword ").val();


        // Fullname
        if (registerFullName == "" || registerFullName.length <= 3) {
            $(".fullname-error").text("Ad və soyadı düzgün daxil edin. ")
        } else {
            localStorage.setItem('registerFullName', JSON.stringify(registerFullName));
        }

        // Email
        if (registerEmail == "") {
            $(".email-error").text("E-poçt daxil edin. ")
        } else {
            localStorage.setItem('registerEmail', JSON.stringify(registerEmail));

        }

        // Password
        if (registerPassword == "") {
            $(".pass-error").text("Şifrə 6-dan çox 25-dən az olmalıdır.")
        } else {
            localStorage.setItem('registerPassword', JSON.stringify(registerPassword));
        }

        // Confirm Password
        if (registerConfirmPassword == "") {
            $(".confPass-error").text("Şifrə 6-dan çox 25-dən az olmalıdır.")
        } else if (registerPassword !== registerConfirmPassword) {
            $(".confPass-error").text("Şifrələr eyni olmalıdır.")
        } else {
            localStorage.setItem('registerconfirmPassword', JSON.stringify(registerConfirmPassword));
            location.href = "../login/login.html"
        }

    })

    // Show hie password
    $(".social-icon-i").click(function(e) {
        var passwordType = $(this).parents(".input-field").find(".pass").attr("type");

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

    $(".social-icon-i-conf").click(function(e) {
        var passwordConfType = $(this).parents(".input-field").find(".pass-conf").attr("type");

        if (passwordConfType == "password") {
            $(this).removeClass("fa-eye-slash");
            $(this).addClass("fa-eye");
            $(".confirm-password").attr("type", "text");

        } else {
            $(this).removeClass("fa-eye");
            $(this).addClass("fa-eye-slash");
            $(".confirm-password").attr("type", "password");
        }
    });
})