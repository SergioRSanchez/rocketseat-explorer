import state from './state.js';
import * as elements from './elements.js';
import * as actions from './actions.js';
import { kitchenTimer } from './sounds.js';

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? state.minutes
  seconds = seconds ?? state.seconds

  elements.minutes.textContent = String(minutes).padStart(2, "0")
  elements.seconds.textContent = String(seconds).padStart(2, "0")
}

export function countDowns() {
  clearTimeout(state.countdownId)

  if (!state.isRunning) {
    return
  }

  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)

  seconds--
  if (seconds < 0) {
    minutes--
    seconds = 59
  }

  if (minutes < 0) {
    actions.reset()
    kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)

  state.countdownId = setTimeout(() => {
    countDowns()
  }, 1000)

}

export function increaseFiveMinutes() {
  let minutes = Number(elements.minutes.textContent)

  minutes += 5
  if (minutes > 60) {
    minutes = 60
  }

  updateDisplay(minutes)
}

export function decreaseFiveMinutes() {
  let minutes = Number(elements.minutes.textContent)

  minutes -= 5
  if (minutes < 0) {
    minutes = 0
  }

  updateDisplay(minutes)
}