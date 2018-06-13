var loading;
jQuery.ajaxSetup({
    beforeSend: function() {
        if (!loading){
            loading = setTimeout("$('#loader').fadeIn()", 500);
        } 
    },
    complete: function(){
        clearTimeout(loading);
        $("#loader").fadeOut();   
    },
    success: function() {
        clearTimeout(loading);
        $("#loader").fadeOut();   
    }
});

$(document).on('click', '.site-link', function(e) {
    pageUrl = $(this).data('route');
    e.preventDefault();
    console.log('link clicked: ' + pageUrl);
    $.ajax({
        url: pageUrl, 
        success: function(data) {
            $('#content-wrapper').html(data);
            window.history.replaceState({"html":data,"pageTitle": pageUrl},"", "/");          
        },
        error: function(err) {
            console.log(err.responseText);
        }
    });
});