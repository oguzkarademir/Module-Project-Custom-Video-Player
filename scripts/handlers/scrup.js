/* Get Our Elements (with querySelector)*/

const progress = player.querySelector('.progress');

/**(offsetX - offsetWidth)
 * when clicking on the progress bar,
*  reaching that percentage of the video
*  (click- mousemove - mousedown - mouseup event) 
*/
function scrub(e) {

    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
 }



/* write your event listeners in event-listeners.js*/
