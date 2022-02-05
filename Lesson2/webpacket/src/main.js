import getDateDiff from "./getDateDiff.js";
import { printError, printResult } from "./printResult.js";
import { getSound } from "./sound.js";
import { switchingMode } from "./switchingMode.js";
import clockSound from "./tic.mp3";
import stopSound from "./02599.mp3";
import "../styles/style.scss";

const formDate = document.getElementById('datecalc');
const switchOnTimer = document.getElementById('switch-on-timer');
const switchOnDate = document.getElementById('switch-on-date');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const inputTimer = document.getElementById('input-timer');
let intervalId;
let timerIsInWork = false;

formDate.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const firstDate = formData.get('firstDate');
    const secondDate = formData.get('secondDate');

    if (!firstDate || !secondDate) {
        printError('Ooopsss - введите обе даты!!!');
    } else {
        printResult(getDateDiff(firstDate, secondDate));
    }
}
switchOnTimer.onclick = () => {
    switchingMode();
}
switchOnDate.onclick = (event) => {
    event.preventDefault();
    switchingMode();
}
start.onclick = (event) => {
    event.preventDefault();
    if (timerIsInWork) return;
    let timer = inputTimer.value;
    timerIsInWork = true;
    intervalId = setInterval(() => {
        if (timer <= 0) {
            clearInterval(intervalId);
            timerIsInWork = false;
            getSound(stopSound, 1000);            
        }    
        inputTimer.value = timer--;
        getSound(clockSound, 500);
    }, 1000);
}
stop.onclick = (event) => {
    event.preventDefault();
    if (timerIsInWork) {
        clearInterval(intervalId);
        timerIsInWork = false;
    }    
}
