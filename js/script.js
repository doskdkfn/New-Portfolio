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