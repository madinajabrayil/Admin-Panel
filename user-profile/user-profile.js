$(document).ready(function() {
    //PROFILE INFO
    //Fulname
    var profiluserFullname = $(".profil-user-fullname").text();
    $(".user-fullname").text(profiluserFullname);

    //Profil Photo
    var profiluserPhoto = $(".img").attr('src');
    $(".prof-photo-img").attr('src', profiluserPhoto);



    //Edit
    $('.icon-edit').click(function() {

        var description = $('.description-text').text()
        $(this).parents('div.personal-info').find('.description-text').html(" <textarea name='user-description' id='user-description' cols='50' rows='5' class='user-description' placeholder='Məzmunu redaktə edin..'>" + description + " </textarea>");

        var email = $('.email-text').text()
        $(this).parents('div.personal-info').find('.email-text').html(" <textarea name='user-email' id='user-email' cols='50' rows='2' class='user-email' placeholder='E-poçtu redaktə edin..'>" + email + " </textarea>");

        var number = $('.number-text').text()
        $(this).parents('div.personal-info').find('.number-text').html(" <textarea name='user-number' id='user-number' cols='50' rows='2' class='user-number' placeholder='Nömrəni redaktə edin..'>" + number + " </textarea>");

        $('.profil-save').css('display', 'inline-block')


    })

    $('.profil-save').click(function() {
        var userDescription = $(this).parents('.personal-info').find('#user-description').val();
        var userEmail = $(this).parents('.personal-info').find('#user-email').val();
        var userNumber = $(this).parents('.personal-info').find('#user-number').val();


        $(this).parents('div.personal-info').find('.description-text').text(userDescription);
        $(this).parents('div.personal-info').find('.email-text').text(userEmail);
        $(this).parents('div.personal-info').find('.number-text').text(userNumber);
        $(this).hide();

    })



    var imgDiv = $(".profile-photo");
    var profilImage = $(".prof-photo-img")
    var file = $("#file");
    var uploadImage = $("#uploadImage")

    file.change(function() {

        const path = $(this).val();
        const filename = path.split('\\').pop();
        console.log(filename)
        profilImage.attr('src', '../img/' + filename)

    })
})