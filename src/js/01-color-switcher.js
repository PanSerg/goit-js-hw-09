const body = document.querySelector('.body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

const INTERVAL_CHANGE = 1000;
let intervalId = null;

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, INTERVAL_CHANGE);
    startBtn.disabled = true;
}

function stopColor() {
    clearInterval(intervalId);
    startBtn.disabled = false;
}





