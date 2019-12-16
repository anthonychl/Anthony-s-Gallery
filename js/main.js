// smooth scroll with the link using jquery

// on the 'click' event for the link of id 'view-work'
$('#view-work').on('click', function(){
    const images = $('#images').position().top; // saving the top position of the element of id 'images' into the variable images

    $('html, body').animate({scrollTop: images}, 900); // animate in 900ms
});