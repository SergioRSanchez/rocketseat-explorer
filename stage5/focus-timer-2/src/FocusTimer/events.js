import * as elements from './elements.js';
import * as actions from './actions.js'

export function registerControls() {
  elements.controls.addEventListener('click', (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action]() != "function") {
      return
    }

    actions[action]()
  })
}

export function registerSounds() {
  elements.sounds.addEventListener('click', (event) => {
    const sound = event.target.dataset.sound
    if (typeof actions[sound]() != "function") {
      return
    }

    actions[sound]()
  })
}