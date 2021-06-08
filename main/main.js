$(document).ready(function() {

    //MENU
    $(".home-link").click(function() {
        location.href = "../index.html"
    })
    $(".posts-link").click(function() {
        location.href = "../posts/posts.html"
    })
    $(".users-link").click(function() {
        location.href = "../users/users.html"
    })
    $(".profile-link").click(function() {
        location.href = "../user-profile/user-profile.html"
    })
    $(".collab-link").click(function() {
        location.href = "../collaboration/collaboration.html"
    })
    $(".menu-list").click(function() {
        $("li").removeClass("active");
        $(this).addClass("active");

        // e.preventDefault();

    })

    $(".pending-table-body").append(" <tr class='table-content'><th scope='row'> 1 </th>" +
        " <td class='pending-post-title'>" + localStorage.getItem('postHeading') + " </td>" +
        " <td class='pending-post-content'>" + localStorage.getItem('postContent') + "</td>" +
        "  <td> <button type='button' class='btn btn-primary add-site'> Sayta əlavə edin </button>" +
        " <button type='button' class='btn btn-danger btn-delete'> Sil </button></td> </tr> ");



    //delete
    $("body").on('click', '.btn-delete', function() {
        $(this).parents('tr.table-content').remove();
    })

    //Search

    // var searchTrigger = $('[data-ic-class="search-trigger"]'),
    //     searchInput = $('[data-ic-class="search-input"]'),
    //     searchClear = $('[data-ic-class="search-clear"]');

    // searchTrigger.click(function() {
    //     $('[data-ic-class="search-trigger"]').addClass('active-src');
    //     searchInput.focus();
    // });

    // searchInput.blur(function() {

    //     if (searchInput.val().length > 0) {
    //         return false;
    //     } else {
    //         searchTrigger.removeClass('active-src');
    //     }

    // });

    searchClear.click(function() {
        searchInput.val('');
    });

    searchInput.focus(function() {
        searchTrigger.addClass('active');
    });


})