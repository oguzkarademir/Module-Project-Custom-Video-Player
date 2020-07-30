/* Get Our Elements (with querySelector)*/
const toggle = document.querySelector(".toggle");

/* to change the icon every time clicking the screen and the play button
 *  (textContent- this)
 */
function updateToggleButton() {
  const icon = this.paused ? "▶️" : "⏸";
  console.log(icon);
  toggle.textContent = icon;
}

/* write your event listeners in event-listeners.js*/
