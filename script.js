const audio = document.getElementById('loveSong');
const volumeControl = document.getElementById('volumeControl');
const volumeValue = document.getElementById('volumeValue');

function playPause() {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}

function setVolume() {
    audio.volume = volumeControl.value;
    volumeValue.textContent = `${Math.round(volumeControl.value * 100)}%`;
}

function showLove() {
    const extraLove = document.getElementById('extraLove');
    extraLove.classList.remove('hidden');
}