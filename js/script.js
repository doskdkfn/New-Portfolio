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
        // $(".more-t-box").animate({left: "102%"}, 500);
        $(".more-t-box, .career-t-box, .skill-t-box").fadeIn(600);
        $(".more-btn").fadeOut(600);
        $(".close-btn").fadeIn(600);
    });

    $(".close-btn").click(function () {
        // $(".more-t-box").animate({left: "6.5%"}, 500);
        $(".more-t-box, .career-t-box, .skill-t-box").fadeOut(600);
        $(".more-btn").fadeIn(600);
        $(".close-btn").fadeOut(600);
    });

    // $(".close-btn").click(function (){
    //     $(".more-btn").show(100);
    // });

    // $(".more-btn").click(function (){
    //     $(".close-btn").show(100);
    // });

    $(".hobby-img").click(function () {
        $(".hobby-t-box").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box").fadeOut(600);
    });

});

/************** 스킬 그래프 모션 **************/

let t = 0
bar.style.width = 0
const barAnimation = setInterval(() => {
    bar.style.width =  t + '%'
    t++ >= totalMinwon && clearInterval(barAnimation)
}, 10)