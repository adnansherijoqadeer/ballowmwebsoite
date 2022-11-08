(function () {
    var $section = $('div').first();
    $section.find('.panzoom').panzoom({
        $zoomIn: $section.find(".zoom-in"),
        $zoomOut: $section.find(".zoom-out"),
        $zoomRange: $section.find(".zoom-range"),
        $reset: $section.find(".reset")
    });

    $('#myCarousel').carousel({
        pause: true,
        interval: false
    });
})();


// appending counter
var totalItems = $('.item').length;
var currentIndex = $('div.active').index() + 1;

$('.num').html('' + currentIndex + ' Of ' + totalItems + '');


var prevButton = $('.left');
var nextButton = $('.right');

prevButton.click(function () {
    $('#myCarousel').on('slid.bs.carousel', function () {
        currentIndex = $('div.active').index() + 1;
        $('.num').html('' + currentIndex + ' Of ' + totalItems + '');
    });
});

nextButton.click(function () {

    $('#myCarousel').on('slid.bs.carousel', function () {
        currentIndex = $('div.active').index() + 1;
        $('.num').html('' + currentIndex + ' Of ' + totalItems + '');
    });
});

// toggle screen
let button = document.querySelector(".full-screen-btn");

button.addEventListener("click", () => {
    let parent = document.querySelector('.active');
    if (!document.fullscreenElement) {
        parent.children[0]?.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
});