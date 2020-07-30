# Development Strategy

> `project-custom-video-player`

A beginner project where we work collaboratively on Document Object Model. That is a custom video player, it has play-pause button, skip buttons, changable volume-playbackrate property and clickable and interactive progressbar.

## Wireframe

![wireframe]()

## 0. Set-Up

### Repository

- Created a new repository 
- Cloned the repository
- Added HTML and CSS features for user interface
- Added JS template files
- Started `development-strategy.md` file
- Created issues
- Pushed the changes
- Turned on GitHub Pages

## 1. Play-Pause Button

**As a site visitor, when i click the screen and play-pause button the video plays or pauses**

> assigned to `Oguz`  
> reviewers `Olga` , `Yauhenia` and `Sayed`

## Repo

This user story was developed on a branch called `play-pause`

## JS

- Got HTML elements with `querySelector` property
- Used `.paused` , `play()` and `pause()` methods for playing/pausing the video
- Used `eventListener` and `click` attribute

## 4. Skip-Button

**As a site visitor, when I click the forward-button, it will be forward 25 seconds, when I click back-button, it will rewind 10 seconds**

> assigned to `Olga`  
> reviewers `Oguz` , `Pavel` and `Sayed`

## Repo

This user story was developed on a branch called `skip-button`

## JS

- Got HTML elements with `querySelector` property
- Used `.currentTime` property for sets or returns the current playback position in a video (in seconds)
- Used `.dataset.skip` property for get the time to skip
- Used `parseFloat()` function for convert time to skip to a number
- Used `eventListener` and `click` attribute for call function

## CSS

- add `:action` effect to skip and play buttons