$(document).ready(function() {
    $(".close-page").click(function() {
        $('.add-newuser-section').css('display', 'none')
    });
    $("#add-new-user").click(function() {
        $('.add-newuser-section').css('display', 'flex')
    })

    // Add new member
    $('.save-new-user').click(function() {
        var userName = $('#newUserName').val();
        var userSurname = $('#newUserSurname').val();
        var userJob = $('#newUserJob').val();
        var userEmail = $('#newUserEmail').val();

        $('.users').append("<div class='user'>" +
            "<div class='user-img'>" +
            " <img src='../img/avatar.png' alt='Shekil'>" +
            "</div><p class='user-fullname'>" + userName + " " + userSurname + "</p>" +
            "<p class='user-position'>" + userJob + "</p>" +
            "<div class='btns'>" +
            "<button class='btn-message-user'><a href='../message/message.html'>Mesaj</a></button>" +
            "<button class='btn-profile'><a href='../user-profile/user-profile.html'>Profil</a></button>" +
            " </div></div>")
        $('.add-newuser-section').css('display', 'none')
    })
})