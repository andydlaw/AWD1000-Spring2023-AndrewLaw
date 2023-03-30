"use strict";
const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let ampm = "AM"; // set default value

    // correct hours and AM/PM value for display
    if (hours > 12) { // convert from military time
        hours = hours - 12;
        ampm = "PM";
    } else { // adjust 12 noon and 12 midnight
        switch (hours) {
            case 12: // noon
                ampm = "PM";
                break;
            case 0:  // midnight
                hours = 12;
                ampm = "AM";
        }
    }

    $("#hours").textContent = hours;
    $("#minutes").textContent = padSingleDigit(now.getMinutes());
    $("#seconds").textContent = padSingleDigit(now.getSeconds());

    $("#ampm").textContent = ampm;
};


var seconds = 0;
var tens = 0;
var appendTens = document.getElementById("s_ms")
var appendSeconds = document.getElementById("s_seconds")
var buttonStart = document.getElementById('start');
var buttonStop = document.getElementById('stop');
var buttonReset = document.getElementById('reset');
var Interval;

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
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
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

}



document.addEventListener("DOMContentLoaded", () => {

    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);


});
