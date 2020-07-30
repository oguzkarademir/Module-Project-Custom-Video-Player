/* Get Our Elements (with querySelector)*/
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");

/* to pause and play the video (.play() - .pause() - .paused) */
function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

/* write your event listeners in event-listeners.js*/
