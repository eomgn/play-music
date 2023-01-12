let qs = el => document.querySelector(el)

let durationInitial = qs('.durationInitial')
let durationTotal = qs('.durationTotal')
let range = qs('#range')

let timerLeft = 200
let timerRight = 0
let intervalLeft
let intervalRight
let minutes
let seconds

range.max = timerLeft

function changingValuesLeft() {
   minutes = parseInt(timerLeft / 60)
   seconds = parseInt(timerLeft % 60)

   timerLeft > 0 ? timerLeft-- : timerLeft--

   minutes = minutes < 10 ? '0' + minutes : minutes
   seconds = seconds < 10 ? '0' + seconds : seconds

   durationInitial.innerHTML = `${minutes}:${seconds}`
}

function changingValuesRight() {
   minutes = parseInt(timerRight / 60)
   seconds = parseInt(timerRight % 60)

   timerRight > 0 ? timerRight++ : timerRight++

   minutes = minutes < 10 ? '0' + minutes : minutes
   seconds = seconds < 10 ? '0' + seconds : seconds

   durationTotal.innerHTML = `${minutes}:${seconds}`

   range.value = timerRight
}

function start() {
   intervalLeft = setInterval(() => {
      if (timerLeft < 0) {
         clearInterval(intervalLeft)
      } else {
         changingValuesLeft()
      }
   }, 100)

   intervalRight = setInterval(() => {
      if (timerRight === 200 + 1) {
         clearInterval(intervalRight)
      } else {
         changingValuesRight()
      }
   }, 100)
}

function reset() {
   timerLeft = 200
   timerRight = 0
   changingValuesRight()
   range.value = timerRight
}

document
   .querySelector('.c-wrapper__button--item-before')
   .addEventListener('click', reset)
document
   .querySelector('.c-wrapper__button--item-play')
   .addEventListener('click', start)
document
   .querySelector('.c-wrapper__button--item-next')
   .addEventListener('click', reset)
