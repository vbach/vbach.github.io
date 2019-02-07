// Mute/Turn Off Mute Video Index.html
const muteOffBtn = document.querySelector('.parallaxvideo'),

    video = document.getvideoById('index-video');
chngBtn = document.querySelector('.muteBtnStyle span');

muteOffBtn.addEventListener('click', () => {
    if (muteOffBtn.value === 'unmuted') {
        muteOffBtn.value = 'muted';
        video.muted = true;
        chngBtn.setAttribute('class', 'fas fa-volume-off')
    } else {
        muteOffBtn.value = 'unmuted';
        video.muted = false;
        chngBtn.setAttribute('class', 'fas fa-volume-up')
    }
});

const maxBtnStyle = document.querySelector('.maxBtnStyle');
maxBtnStyle.addEventListener('click', (e) => {
    if (video.requestFullscreen) {
        video.requestFullscreen
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    }
})