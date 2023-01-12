// -------------

// function startTimer(duration, display) {
//   var timer = duration,
//     minutes,
//     seconds;

//   setInterval(function () {
//     minutes = parseInt(timer / 60, 10);
//     seconds = parseInt(timer % 60, 10);

//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     display.textContent = minutes + ":" + seconds;

//     if (--timer < 0) {
//       timer = duration;
//     }
//   }, 1000);
// }

// window.onload = function () {
//   var duration = 60 * 2.6; // Converter para segundos

//   display = document.querySelector(".timer"); // selecionando o timer
//   startTimer(duration, display); // iniciando o timer
// };

let qs = el => document.querySelector(el)

let button = qs('.button')
let durationInitial = qs('.durationInitial')
let durationTotal = qs('.durationTotal')
let range = qs('#range')

let ranger

let timer = 60
let wsg = 0
let minutos
let segundos

range.max = timer

function xd() {
   minutos = parseInt(timer / 60)
   segundos = parseInt(timer % 60)

   if (timer > 0) {
      timer--
   }

   minutos = minutos < 10 ? '0' + minutos : ''

   durationInitial.innerHTML = `${minutos}:${segundos}`

   range.value = ranger++
}

function xp() {
   minutos = parseInt(wsg / 60)
   segundos = parseInt(wsg % 60)
   if (timer > 0) {
      wsg++
   }

   durationTotal.innerHTML = `${minutos}:${segundos}`
}

setInterval(xp, 1000)
setInterval(xd, 1000)

// https://www.youtube.com/watch?v=rd4Mr08bX20

// dividir em minutos e segundos separados por string com dois pontos
