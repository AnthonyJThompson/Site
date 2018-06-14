$(window).bind('orientationchange resize', function (event) {
    if (event.orientation) {
        if (event.orientation == 'landscape') {
            if (window.rotation == 90) {
                rotate(this, -90);
            } else {
                rotate(this, 90);
            }
        }
    }
});

function rotate(el, degs) {
    iedegs = degs / 90;
    if (iedegs < 0) iedegs += 4;
    transform = 'rotate(' + degs + 'deg)';
    iefilter = 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + iedegs + ')';
    styles = {
        transform: transform,
        '-webkit-transform': transform,
        '-moz-transform': transform,
        '-o-transform': transform,
        filter: iefilter,
        '-ms-filter': iefilter
    };
    $(el).css(styles);
}

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

$(document).on('click', '.site-link', function (e) {
    pageUrl = $(this).data('route');
    e.preventDefault();
    console.log('link clicked: ' + pageUrl);
    $.ajax({
        url: pageUrl,
        success: function (data) {
            $('#content-wrapper').html(data);
            window.history.replaceState({ "html": data, "pageTitle": pageUrl }, "", "/");
        },
        error: function (err) {
            console.log(err.responseText);
        }
    });
});