// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

//select btn
const btn = document.querySelector('.switch-btn');
//select video
const video = document.querySelector('.video-container');

//add movement functionality to btn
//give movement/button control over video
btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    } else{
        btn.classList.remove('slide');
        video.play();
    }
});

//select preloader
const preloader = document.querySelector('.preloader');

//listen for load event
window.addEventListener('load', function (){
    preloader.classList.add('hide-preloader')
})