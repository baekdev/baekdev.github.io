/* global window */
(function (window, document, $) {
    'use strict';

    $(function () {
        // $(window).scroll(function () {
        //     var viewportTop = $(window).scrollTop();
        //     if (viewportTop) {
        //         var viewportBottom = viewportTop + $(window).height();
        //         var footerTop = $('#footer').offset().top;
        //         if ((footerTop <= viewportBottom) && (footerTop >= viewportTop)) {
        //             // footer is visible: static above footer
        //             $('#back-to-top').addClass('static').show();
        //         } else {
        //             // footer is invisible: fixed on bottom-right of viewport
        //             $('#back-to-top').removeClass('static').show();
        //         }
        //     } else {
        //         // already top: hide
        //         $('#back-to-top').hide();
        //     }
        // });

        // turn img alt into caption
        $('.article-post img').replaceWith(function () {
            var result = '<figure>'
                + '<a href="' + $(this).attr('src') + '" class="mg-link">'
                + '<img src="' + $(this).attr('src') + '" style="' + $(this).attr('style') + '" alt="' + $(this).attr('alt') + '" />'
                + '</a>';
            console.log($(this).attr('alt') != undefined)
            if ($(this).attr('alt')) {
                result += '<figcaption class="caption">' + $(this).attr('alt') + '</figcaption>'
            }
            result += '</figure>';
            return result;
        });
        // and connect magnific popup image viewer
        $('.article-post .mg-link').magnificPopup({
            type: 'image',
            closeOnContentClick: true
        });
    });
}(window, window.document, window.jQuery));
