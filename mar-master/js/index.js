$(function() {
    $("#slider").slick({
        arrows: false,
        fade: true,
        autoplay: 1000,
        slidesToScroll: 1,
    });
});

// $(function() {
//     $("#slider").slick({
//         autoplay: true,
//         dots: false,
//         arrows: true,
//         responsive: [{
//             breakpoint: 990,
//             settings: {
//                 arrows: false,
//             },
//         }, ],
//     });
// });

// $(document).ready(function() {
//     $("#slider").slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     });
// });