
const CHANGE_COLOR_DELAY = 1000;
let timeInt = null;

const settings = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

settings.btnStart.addEventListener('click', btnStartChangeColor);
settings.btnStop.addEventListener('click', btnStop);


function btnStartChangeColor() {
    settings.btnStart.disabled = true;
    settings.btnStop.disabled = false;

    timeInt = setInterval(() => {
        settings.body.style.backgroundColor = getRandomHexColor()
    }, CHANGE_COLOR_DELAY);
}

function btnStop() {
    settings.btnStart.disabled = false;
    settings.btnStop.disabled = true;
    clearInterval(timeInt);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}





