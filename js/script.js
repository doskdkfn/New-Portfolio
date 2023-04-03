/**************** 비디오 태그 autoplay 재생 **************/

// var autoplayVideoInterval = setInterval("autoplayVideo()", 200);


// function autoplayVideo() {
//     var promise = document.querySelector('video').play();
//     if (promise !== undefined) {
//         promise.then(function (_) {
//             // Autoplay started!
//             clearInterval(autoplayVideoInterval);

//         }).catch(function (error) {// Autoplay was prevented.
//             // Show a "Play" button so that user can start playback.
//         });
//     }
// }

$(document).ready(function () {
    $(".more-btn").click(function () {
        $(".more-t-box").animate({left: "102%"}, 200);
        $(".more-t-box").fadeIn(600);
        $(".more-btn").fadeOut(200);
        $(".close-btn").fadeIn(200);
    });

    $(".close-btn").click(function () {
        $(".more-t-box").animate({left: "6.5%"}, 300);
        $(".more-t-box").fadeOut(600);
        $(".more-btn").fadeIn(200);
        $(".close-btn").fadeOut(200);
    });

    // $(".close-btn").click(function (){
    //     $(".more-btn").show(100);
    // });

    // $(".more-btn").click(function (){
    //     $(".close-btn").show(100);
    // });
});