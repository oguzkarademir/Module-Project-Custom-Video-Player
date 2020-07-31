/* Event Listeners */
debugger;

video.addEventListener("click", playPause);
toggle.addEventListener("click", playPause);

video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
skipButtons.forEach(button => button.addEventListener('click', skipButton));

ranges.forEach(range => range.addEventListener('change', updateRangeVolumePlaybackRate));