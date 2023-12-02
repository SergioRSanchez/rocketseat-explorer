const screen1 = document.querySelector('#screen1')
const screen2 = document.querySelector('#screen2')
const btnOpen = document.querySelector('.btnOpen')
const btnOpenAgain = document.querySelector('.btnOpenAgain')


btnOpen.addEventListener('click', handleChangeScreen)
btnOpenAgain.addEventListener('click', handleChangeScreen)

function handleChangeScreen() {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
}