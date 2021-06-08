$(document).ready(function() {
    // Modal Pop up
    $(".close-page").click(function() {
        $('.add-newcollab-section').css('display', 'none')
    });
    $("#add-new-collab").click(function() {
        $('.add-newcollab-section').css('display', 'flex')
    })

    // Add Collab
    $('.save-new-collab').click(function(e) {
        var collabName = $("#newCollabName").val();
        var collabSurname = $("#newCollabSurname").val();
        var collabCompany = $("#newCollabCompany").val();
        var collabEmail = $("#newCollabEmail").val();

        $(".add-collab-s").before("<div class='collab'>" +
            "<div class='collab-img'> <img src='../img/avatar.png' alt='Shekil'></div>" +
            "<p class='collab-fullname'>" + collabName + " " + collabSurname + "</p>" +
            "<p class='collab-email'>" + collabEmail + "</p>" +
            "<p class='collab-company-name'>" + collabCompany + "</p>" +
            "<div class='connect'>" +
            "<a href='../user-profile/user-profile.html' class='collab-profile-link'><i class='far fa-user'></i></a>" +
            "<a href='../message/message.html' class='collab-message-link'><i class='far fa-envelope'></i></a>" +
            "  </div> </div>"

        )
        $('.add-newcollab-section').css('display', 'none')
    })
})