//querySelector
let qs = el => document.querySelector(el)

//duration of left and duration of right and input
let durationInitial = qs('.durationInitial')
let durationTotal = qs('.durationTotal')
let range = qs('#range')

//timers and intervals

let timerLeft = 200
let timerRight = 0
let intervalLeft
let intervalRight
let minutes
let seconds

/******************************/

/******************************/

// value max of input range

range.max = timerLeft

/******************************/

/*

  --->> timerLeft


  transforming the minutes and seconds so that it is decremented according to how time passes
*/

function changingValuesLeft() {
  minutes = parseInt(timerLeft / 60)
  seconds = parseInt(timerLeft % 60)

  timerLeft > 0 ? timerLeft-- : timerLeft--

  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  durationInitial.innerHTML = `<p>${minutes}</p><p>:</p><p>${seconds}</p>`
}

/*

  --->> timerRight


  transforming the minutes and seconds so that it is added according to how time passes
*/

function changingValuesRight() {
  minutes = parseInt(timerRight / 60)
  seconds = parseInt(timerRight % 60)

  timerRight > 0 ? timerRight++ : timerRight++

  minutes = minutes < 10 ? '0' + minutes : minutes
  seconds = seconds < 10 ? '0' + seconds : seconds

  durationTotal.innerHTML = `<p>${minutes}</p><p>:</p><p>${seconds}</p>`
  inputRange()
}

/*
  assiging of setinterval at functions and added conditionals
*/

function start() {
  intervalLeft = setInterval(() => {
    if (timerLeft < 0) {
      clearInterval(intervalLeft)
    } else {
      changingValuesLeft()
    }
  }, 1000)

  intervalRight = setInterval(() => {
    if (timerRight === 200 + 1) {
      clearInterval(intervalRight)
    } else {
      changingValuesRight()
    }
  }, 1000)
}

function reset() {
  timerLeft = 200
  timerRight = 0
  changingValuesRight()
  inputRange()
}

/******************************/

/*
  progress of input
*/

function inputRange() {
  range.value = timerRight

  let rangeInput = document.getElementById('range')
  let progressBar = document.getElementById('progressBar')

  console.log((progressBar.style.width = `${rangeInput.value / 2}%`))
}

/******************************/

/*
  creating footer
*/

function footer() {
  let footer = qs('footer')
  let _footer = document.createElement('div')

  _footer.innerHTML = `
  <a href=""><img src="https://avatars.githubusercontent.com/u/83884728?v=4" alt="Desenvolvedor" > <p>
  Desenvolvido por Matheus Gabriel Nogueira</p></a>
  `

  footer.append(_footer)
}

/******************************/

/*
  call some functions
*/

footer()
document.querySelector('.before').addEventListener('click', reset)
document.querySelector('.play').addEventListener('click', start)
document.querySelector('.next').addEventListener('click', reset)
