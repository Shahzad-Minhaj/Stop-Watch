let seconds = 0;
let tens = 0;
let minutes = 0;
let appendTens = document.querySelector("#tens")
let appendSeconds = document.querySelector("#seconds")
let appendMinutes = document.querySelector("#minutes")
let buttonStart = document.querySelector("#button-start");
let buttonStop = document.querySelector("#button-stop");
let buttonReset = document.querySelector("#button-reset");
let Interval;

buttonStart.onclick = function () {

  clearInterval(Interval);

  Interval = setInterval(startTimer, 10);

}

buttonStop.onclick = function () {
  clearInterval(Interval);
}


buttonReset.onclick = function () {
  clearInterval(Interval);
  tens = "00";
  seconds = "00";
  minutes = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMinutes.innerHTML = minutes;
}



function startTimer() {
  tens++;

  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;

  }

  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
  if (seconds > 59) {
    minutes++;
    appendMinutes.innerHTML = "0" + minutes;
    seconds = 0;
    appendSeconds.innerHTML = "0" + 0;
  }

  if (minutes > 9) {
    appendMinutes.innerHTML = minutes;
  }



}