var loading;
jQuery.ajaxSetup({
    beforeSend: function () {
        if (!loading) {
            loading = setTimeout("$('#loader').fadeIn()", 500);
        }
    },
    complete: function () {
        clearTimeout(loading);
        $("#loader").fadeOut();
    },
    success: function () {
        clearTimeout(loading);
        $("#loader").fadeOut();
    }
});


function load(url, element) {
    $.ajax({
        url: url,
        success: function (data) {
            $(element).html(data);
            window.history.replaceState({ "html": data, "pageTitle": url }, "", "/");
        },
        error: function (err) {
            console.log(err.responseText);
            //$(element).html(err.responseText);
        }
    });
}
function add(url, json) {
    $.ajax({
        type: "POST",
        url: url,
        data: json,
        dataType: "json",
        success: function (data) {
            console.log('added');
        },
        error: function(err) {
            console.log(err);
        }
    })
}

function init() {
    load('/tasks', '#tasks-wrapper');
}

$(document).on('click', '.site-link', function (e) {
    pageUrl = $(this).data('route');
    e.preventDefault();
    console.log('link clicked: ' + pageUrl);
    load(pageUrl, '#content-wrapper');
});

init();