//querySelector
let qs = (el) => document.querySelector(el);

//duration of left and duration of right and input
let durationInitial = qs(".durationInitial");
let durationTotal = qs(".durationTotal");
let range = qs("#range");
let play = document.querySelector(".c-wrapper__button--item.pause");
let audio = qs("#audio");

//duration total from minutes and seconds for default

let minutes = Math.floor(audio.duration / 60);
let seconds = Math.floor(audio.duration % 60);
durationTotal.innerHTML = `<p>0${minutes}</p><p>:</p><p>${seconds}</p>
`;

/******************************/

// value max of input range
range.max = Math.floor(audio.duration);

/******************************/

/*
  --->> inital duration value from left
  transforming duration from current time for minutes and seconds from left
*/
function changingValuesLeft() {
  minutes = parseInt(audio.currentTime / 60);
  seconds = parseInt(audio.currentTime % 60);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  durationInitial.innerHTML = `<p>${minutes}</p><p>:</p><p>${seconds}</p>`;
}

/*
  --->> inital duration value from right
  transforming duration from current time for minutes and seconds from right
*/
function changingValuesRight() {
  minutes = Math.floor((audio.duration - audio.currentTime) / 60);
  seconds = Math.floor((audio.duration - audio.currentTime) % 60) + 1;

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  durationTotal.innerHTML = `<p>${minutes}</p><p>:</p><p>${seconds}</p>`;
}

/*
  assiging of setinterval at functions and added conditionals
*/
function start() {
  if (play.classList.contains("pause")) {
    play.classList.remove("pause");
    play.classList.add("play");

    qs(".c-wrapper__button--item.play img").src = "./assets/play.svg";
    audio.play();

    setInterval(() => {
      changingValuesLeft();
      changingValuesRight();
      inputRange();
    });
  } else {
    play.classList.remove("play");
    play.classList.add("pause");
    qs(".c-wrapper__button--item.pause img").src = "./assets/pause.svg";
    audio.pause();
  }
}

/******************************/

/*
  progress of input
*/
function inputRange() {
  range.value = audio.currentTime;

  let rangeInput = document.getElementById("range");
  let progressBar = document.getElementById("progressBar");

  progressBar.style.width = `${rangeInput.value / 2}%`;
}

/******************************/

/*
  creating footer
*/
function footer() {
  let footer = qs("footer");
  let _footer = document.createElement("div");

  _footer.innerHTML = `
  <a href="https://www.linkedin.com/in/eomgn/" target="_blank"><img src="https://avatars.githubusercontent.com/u/83884728?v=4" alt="Desenvolvedor" > <p>
  Desenvolvido por Matheus Gabriel Nogueira</p></a>
  `;

  footer.append(_footer);
}

/******************************/

/*
  call some functions
*/

footer();
document.querySelector(".pause").addEventListener("click", start);
