$(document).ready(function () {

    var pixels;

    //Control icon size by changing all 'icon' class elements css 'width' property to a px value
    //Values lower than 90px for multiline names do not look good
    $(function () {
        $("#slider").slider({
            max: 256, min: 60, value: 256, steps: 1, change: function (event, ui) {
                pixels = ui.value;

                $('.icon').css('width', pixels + 'px');
                $('#icon_size').text(pixels + 'px');

                if (pixels < 100) {
                    $('.hover_wrapper').css('padding', '4px');
                    $('.bottom_wrapper').addClass('grid_view');
                    $('.hover_wrapper').removeClass('center');
                }
                else {
                    $('.hover_wrapper').css('padding', '');
                    $('.bottom_wrapper').removeClass('grid_view');
                    $('.hover_wrapper').addClass('center');
                }
            }
        });
    });

    /*Show hover container on mouseenter
    * Change selected hovered element's class 'selection_menu' css 'visibility' property to 'visible'
    * Change selected hovered element's class 'protocall_icons' css property to '-webkit-filter' to 'grayscale(0)'
    */
    $('.hover_wrapper').mouseenter(function () {
        $(this).children('.icon_wrapper').children('.bottom_wrapper').children('.selection_menu').css('visibility', 'visible');
        $(this).children('.icon_wrapper').children('.bottom_wrapper').children('.location_wrapper').children('.protocall_icons').css('-webkit-filter', 'grayscale(0)'); //-webkit extension is required. This will not work in FF
        $(this).children('.icon_wrapper').children('.bottom_wrapper').children('.location_wrapper').children('.protocall_icons').css('-webkit-filter', 'grayscale(0)'); //-webkit extension is required. This will not work in FF
        $(this).children('.icon_wrapper').children('.bottom_wrapper').children('.location_wrapper').children('.location').css({ 'color': 'white', 'text-shadow': '0 1px 0 rgba(0, 0, 0, 0.7)' }); //-webkit extension is required. This will not work in FF
    });

    //Show original css values on mouseleave
    $('.hover_wrapper').mouseleave(function () {
        $(this).children('.icon_wrapper').children('.bottom_wrapper').children('.selection_menu').css('visibility', 'hidden');
        $(this).children('.icon_wrapper').children('.bottom_wrapper').children('.location_wrapper').children('.protocall_icons').css('-webkit-filter', 'grayscale(1)');
        $(this).children('.icon_wrapper').children('.bottom_wrapper').children('.location_wrapper').children('.location').css({ 'color': '', 'text-shadow': '' }); //-webkit extension is required. This will not work in FF
    });
});