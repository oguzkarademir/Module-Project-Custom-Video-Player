/* Get Our Elements (with querySelector)*/
const progressBar = player.querySelector('.progress__filled');
const ranges = player.querySelectorAll('.player__slider');



/* 
*  (.currentTime - .duration - timeupdate event)
*/
function handleProgressBar() { 

    const videoPercent = (video.currentTime / video.duration) * 100;
   
    progressBar.style.flexBasis = `${videoPercent}%`;

}


function handleRangeUpdate() {
    video[this.name] = this.value;
}


ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));



/* write your event listeners in event-listeners.js*/
