var play = document.getElementById(play);
var img_video = document.getElementById(img_video);
var modal_container = document.getElementById(modal_container);

play.addEventListener('click', () => {
    modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});