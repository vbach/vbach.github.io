// Mute/Turn Off Mute Video Index.html
const muteOffBtn = document.querySelector('.parallaxvideo'),
    video = document.getElementById('index-video');
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