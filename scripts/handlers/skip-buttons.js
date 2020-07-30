/* Get Our Elements (with querySelector)*/

const skipButtons = player.querySelectorAll('[data-skip]');

/* When forward button is clicked, it will be 
 * forward 25 seconds, when clicked back button,
 * it will rewind 10 seconds
 * (parseFloat() - this.dataset)
 */

function skipButton() {
    video.currentTime += parseFloat(this.dataset.skip);
    console.log(this.dataset.skip);
   }





/* write your event listeners in event-listeners.js*/