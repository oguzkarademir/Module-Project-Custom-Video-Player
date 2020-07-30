/* Event Listeners */

video.addEventListener('click', playPause);
toggle.addEventListener('click', playPause);
skipButtons.forEach(button => button.addEventListener('click', skipButton));