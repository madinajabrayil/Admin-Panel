$(document).ready(function() {
    //POST
    //ADD POST
    // $(".cke_editable > p").addClass("p-editor");
    $(".add-post-btn").click(function(e) {

        e.preventDefault();
        var postText = $(".ck-content").html();
        var postHeading = $(".post-area-heading").val();

        if (postHeading.length == 0) {
            alert("Add post heading, please.")
        } else if (postText.length == 0) {
            alert("Add post content, please.")
        } else if (postHeading.length == 0 && postText.length == 0) {
            alert("Add post heading and content, please.")
        } else {
            $("#post-card-section").append("<div class='post-card card w-75'><div class='card-body'>" +
                    "<h5 class='card-title' >" + postHeading + "</h5> <span class='card-text'>" + postText + "</span>" +
                    "<div class='btn-group'><button type='button' class='btn btn-danger btn-delete'>Sil</button>" +
                    "<button type='button' class='btn btn-warning btn-edit'> Redaktə edin </button>" +
                    "<button type='button' class='btn btn-success btn-pending'> Gözləməyə əlavə edin </button></div></div> </div>")
                // $("#post-card-section").append("<div class='post-card card w-75'><div class='card-body'>" +
                //     "<h5 class='card-title' >" + postHeading + "</h5> " + postText +
                //     " <div class='btn-group'><button type='button' class='btn btn-danger btn-delete'>Sil</button>" +
                //     "<button type='button' class='btn btn-warning btn-edit'> Redaktə edin </button>" +
                //     "<button type='button' class='btn btn-success btn-pending'> Gözləməyə əlavə edin </button></div></div> </div>")
            $(".post-area-heading").empty();
            $(".ck-content").empty();

        }

    })

    //DELETE POST
    $("body").on('click', '.btn-delete', function() {
        $(this).parents('div.post-card').remove();
    })


    //EDIT POST
    $("body").on('click', '.btn-edit', function() {
        // var postHeading = $(".post-area-heading").val();
        // var postText = $(".ck-content").html();
        var postHeading = $(this).parents('div.post-card').find('.card-title').text();
        var postText = $(this).parents('div.post-card').find('.card-text').html();

        $(this).parents('div.post-card').find('.card-title').html(" <textarea name='post-heading' id='post-heading' cols='20' rows='1' class='post-edit-heading' placeholder='Post başlığını redaktə edin..'>" + postHeading + "</textarea>")
        $(this).parents('div.post-card').find('.card-text').html(" <textarea name='post-content' id='post-content' cols='45' rows='5' class='post-edit-content' placeholder='Post məzmununu redaktə edin..'>" + postText + "</textarea>")

        $(this).parents('div.post-card').find('.btn-group').prepend(" <button type='button' class='btn btn-info btn-update'>Yeniləyin</button>")

        //Hide edit button
        $(this).hide();


    })

    //UPDATE POST
    $("body").on('click', '.btn-update', function() {
        //Get textarea value
        var postHeading = $(this).parents('div.post-card').find('.post-edit-heading').val();
        var postContent = $(this).parents('div.post-card').find('.post-edit-content').val();
        // var postContent1 = $(this).parents('div.post-card').find('.post-edit-content').html();
        // console.log(postContent);
        // console.log(postContent1)
        // //Update post heading and content
        $(this).parents('div.post-card').find('.card-title').text(postHeading);
        $(this).parents('div.post-card').find('.card-text').html(postContent);

        // //Show edit button, hide update button
        $(this).parents('div.post-card').find('.btn-update').hide();
        $(this).parents('div.post-card').find('.btn-edit').show();
        $(this).parents('div.post-card').find('.btn-pending').show();
    })

    // LOCALSTORAGE
    // HOME SECTION - PENDING POSTS

    $("body").on('click', '.btn-pending', function(e) {

        var postHeading = $(e.target).parents('div.post-card').find('.card-title').text()
        var postContent = $(e.target).parents('div.post-card').find('.card-text').text()


        localStorage.setItem('postHeading', JSON.stringify(postHeading));
        localStorage.setItem('postContent', JSON.stringify(postContent));


    });
})
