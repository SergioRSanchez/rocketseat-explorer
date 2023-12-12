import state from './state.js';
import * as timer from './timer.js';
import * as sounds from './sounds.js';
import * as elements from './elements.js';

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  elements.playButton.classList.toggle('running')

  sounds.buttonPressAudio.play()

  timer.countDowns()
}

export function reset() {
  if (!state.isRunning) {
    return
  }
  sounds.buttonPressAudio.play()
  state.isRunning = false
  document.documentElement.classList.remove('running')
  elements.playButton.classList.remove('running')

  timer.updateDisplay()
}

export function addMinutes() {
  timer.increaseFiveMinutes()
}

export function removeMinutes() {
  timer.decreaseFiveMinutes()
}

export function playForest() {
  elements.forest.classList.toggle('active')

  if (elements.forest.classList.contains('active')) {
    sounds.forestSound.play()
  } else {
    sounds.forestSound.pause()
  }
}

export function playRain() {

  elements.rain.classList.toggle('active')
  if (elements.rain.classList.contains('active')) {
    sounds.rainSound.play()
  } else {
    sounds.rainSound.pause()
  }
}

export function playCoffee() {
  elements.coffeeShop.classList.toggle('active')

  if (elements.coffeeShop.classList.contains('active')) {
    sounds.coffeeSound.play()
  } else {
    sounds.coffeeSound.pause()
  }
}

export function playFireplace() {
  elements.fireplace.classList.toggle('active')

  if (elements.fireplace.classList.contains('active')) {
    sounds.fireplaceSound.play()
  } else {
    sounds.fireplaceSound.pause()
  }
}