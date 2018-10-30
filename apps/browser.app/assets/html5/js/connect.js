$(document).ready(function () {

    var pixels;

    //Control icon size by changing all 'icon' class elements css 'width' property to a px value
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
    */
    $('.hover_wrapper').mouseenter(function () {
        $(this).children('.icon_wrapper').children('.bottom_wrapper').children('.selection_menu').css('visibility', 'visible');
    });

    //Show original css values on mouseleave
    $('.hover_wrapper').mouseleave(function () {
        $(this).children('.icon_wrapper').children('.bottom_wrapper').children('.selection_menu').css('visibility', 'hidden');
    });
});