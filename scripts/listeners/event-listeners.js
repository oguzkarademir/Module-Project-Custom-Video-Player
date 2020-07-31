/* Event Listeners */
debugger;

video.addEventListener("click", playPause);
toggle.addEventListener("click", playPause);

video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);
skipButtons.forEach(button => button.addEventListener('click', skipButton));
progress.addEventListener('click', scrub);



video.addEventListener("timeupdate", handleProgressBar);

ranges.forEach(range => range.addEventListener('change', updateRangeVolumePlaybackRate));

