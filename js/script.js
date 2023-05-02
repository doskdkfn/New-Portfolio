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

    /************** 취미 클릭 이벤트1 **************/

    $(".hobby-img1").click(function () {
        $(".hobby-t-box1").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box1").fadeOut(600);
    });

    /************** 취미 클릭 이벤트2 **************/

    $(".hobby-img2").click(function () {
        $(".hobby-t-box2").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box2").fadeOut(600);
    });

    /************** 취미 클릭 이벤트3 **************/

    $(".hobby-img3").click(function () {
        $(".hobby-t-box3").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box3").fadeOut(600);
    });

    /************** 취미 클릭 이벤트4 **************/

    $(".hobby-img4").click(function () {
        $(".hobby-t-box4").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box4").fadeOut(600);
    });

    /************** 취미 클릭 이벤트5 **************/

    $(".hobby-img5").click(function () {
        $(".hobby-t-box5").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box5").fadeOut(600);
    });

    /************** 취미 클릭 이벤트6 **************/

    $(".hobby-img6").click(function () {
        $(".hobby-t-box6").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box6").fadeOut(600);
    });

    /************** 취미 클릭 이벤트7 **************/

    $(".hobby-img7").click(function () {
        $(".hobby-t-box7").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box7").fadeOut(600);
    });

    /************** 취미 클릭 이벤트8 **************/

    $(".hobby-img8").click(function () {
        $(".hobby-t-box8").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box8").fadeOut(600);
    });

    /************** 취미 클릭 이벤트9 **************/

    $(".hobby-img9").click(function () {
        $(".hobby-t-box9").fadeIn(600);
    });

    $(".hobby-close-btn").click(function () {
        $(".hobby-t-box9").fadeOut(600);
    });

    /************** 취미 슬라이드 **************/

    // $(".prev").click(function () {
    //     $(".hobby-slide>li").animate({left: "-100%"}, 500, function () {
    //         $({opacity:"100"})
    //     })
    // })


    // $('.hobby-slide').bxSlider ({
    //     touchEnabled: (navigator.maxTouchPoints > 0),
    // });

    // $('.hobby-slide2').bxSlider ({
    //     touchEnabled: (navigator.maxTouchPoints > 0),
    // });

    slider = $('.hobby-slide').bxSlider();
    slider.goToSlide(9);

});

/************** 스킬 그래프 모션 **************/

let t = 0
bar.style.width = 0
const barAnimation = setInterval(() => {
    bar.style.width =  t + '%'
    t++ >= totalMinwon && clearInterval(barAnimation)
}, 10)