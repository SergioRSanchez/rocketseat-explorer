import * as FocusTimer from './FocusTimer/index.js'
// import * as sounds from './FocusTimer/sounds.js'

// const minutes = document.querySelector('.minutes')
// const seconds = document.querySelector('.seconds')

// export function start(minutes, seconds) {
//   minutes.textContent = String(minutes).padStart(2, "0")
//   seconds.textContent = String(seconds).padStart(2, "0")
// }

// const forest = document.querySelector('.forest')
// const rain = document.querySelector('.rain')
// const coffeeShop = document.querySelector('.coffee-shop')
// const fireplace = document.querySelector('.fireplace')


// export function toggleForest() {
//   forest.classList.toggle('active')
//   forest.addEventListener('click', (event) => {
//     sounds.forestSound.play(event.target)
//   })
// }

FocusTimer.start(25, 0)