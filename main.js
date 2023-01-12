let qs = (el) => document.querySelector(el);

let durationInitial = qs(".durationInitial");
let durationTotal = qs(".durationTotal");
let range = qs("#range");

let timerLeft = 200;
let timerRight = 0;
let intervalLeft;
let intervalRight;
let minutes;
let seconds;

range.max = timerLeft;

function inputRange() {
  range.value = timerRight;

  let xd = 100 / timerLeft;

  console.log(xd);
}

function changingValuesLeft() {
  minutes = parseInt(timerLeft / 60);
  seconds = parseInt(timerLeft % 60);

  timerLeft > 0 ? timerLeft-- : timerLeft--;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  durationInitial.innerHTML = `<p>${minutes}</p><p>:</p><p>${seconds}</p>`;
}

function changingValuesRight() {
  minutes = parseInt(timerRight / 60);
  seconds = parseInt(timerRight % 60);

  timerRight > 0 ? timerRight++ : timerRight++;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  durationTotal.innerHTML = `<p>${minutes}</p><p>:</p><p>${seconds}</p>`;
  inputRange();
}

function start() {
  intervalLeft = setInterval(() => {
    if (timerLeft < 0) {
      clearInterval(intervalLeft);
    } else {
      changingValuesLeft();
    }
  }, 100);

  intervalRight = setInterval(() => {
    if (timerRight === 200) {
      clearInterval(intervalRight);
    } else {
      changingValuesRight();
    }
  }, 100);
}

function reset() {
  timerLeft = 200;
  timerRight = 0;
  changingValuesRight();
  inputRange();
}

document.querySelector(".before").addEventListener("click", reset);
document.querySelector(".play").addEventListener("click", start);
document.querySelector(".next").addEventListener("click", reset);
