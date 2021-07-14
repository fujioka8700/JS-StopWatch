const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");

var min = 0;
var sec = 0;
var miliSec = 0;
var timer;
var flgReset = false;

function dispTimer(min, sec, miliSec) {
    var retSec = ('00' + sec).slice(-2);
    var retMin = ('00' + min).slice(-2);
    var retMiliSec = ('00' + miliSec).slice(-2);

    document.getElementById("timer").innerHTML = retMin + ":" + retSec + ":" + retMiliSec;
}

function callTimer() {
    miliSec++;
    if (miliSec < 100) {
        if (miliSec === 99) {
            miliSec = 0;
            sec++;
            if (sec === 60) {
                sec = 0;
                min++;
            }
        }
    } else {
        miliSec = 0;
    }
    dispTimer(min, sec, miliSec);
}

function buttonColorInit() {
    stopButton.classList.add('buttonInvalid');
    resetButton.classList.add('buttonInvalid');
}


function start() {
    startButton.disabled = true;
    startButton.classList.add('buttonInvalid');
    stopButton.classList.remove('buttonInvalid');
    resetButton.classList.add('buttonInvalid');
    timer = setInterval(callTimer, 10);
    flgReset = false;
}

function stop() {
    startButton.disabled = false;
    startButton.classList.remove('buttonInvalid');
    stopButton.classList.add('buttonInvalid');
    if (miliSec != 0 || sec != 0) {
        resetButton.classList.remove('buttonInvalid');
    }
    clearInterval(timer);
    flgReset = true;
}

function reset() {
    if (flgReset) {
        min = 0;
        sec = 0;
        miliSec = 0;

        dispTimer(min, sec, miliSec);

        buttonColorInit();

        flgReset = false;
    }
}

buttonColorInit();