/* Get Our Elements (with querySelector)*/
const progressBar = player.querySelector('.progress__filled');



/* 
*  (.currentTime - .duration - timeupdate event)
*/
function handleProgressBar() { 

    const videoPercent = (video.currentTime / video.duration) * 100;
   
    progressBar.style.flexBasis = `${videoPercent}%`;

}




/* write your event listeners in event-listeners.js*/
