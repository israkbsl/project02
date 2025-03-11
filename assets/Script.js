$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        loop: true, // Enables looping
        margin: 10, // Margin between items
        nav: true, // Shows navigation arrows
        responsive: {
            0: { items: 1 }, // 1 item on small screens
            600: { items: 3 }, // 3 items on medium screens
            1000: { items: 5 } // 5 items on large screens
        }
    });
});


$(document).ready(function() {
    $(".owl-carousel").owlCarousel();
});