import * as elements from './elements.js';

export function registerControls() {
  elements.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (action === undefined) {
      return
    }

    console.log(action)
  })
}

export function registerSounds() {
  elements.sounds.addEventListener('click', (event) => {
    const sound = event.target.dataset.sound
    if (sound === undefined) {
      return
    }

    console.log(sound)
  })
}