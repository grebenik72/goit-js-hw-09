
const CHANGE_COLOR_DELAY = 1000;
let timeInt = 0;

const bodyBgcolor = document.querySelector(`body`);
const startBtnChangeColor = document.querySelector(`button[data-start]`);
const stopBtn = document.querySelector(`button[data-stop]`);

startBtnChangeColor.addEventListener(`click`, bodyChangeColor => {
  click.target.disable = true;
  timeInt = setInterval(() => {
        bodyBgcolor.style.backgroundColor = getRandomHexColor()
    }, CHANGE_COLOR_DELAY);
});

stopBtn.addEventListener(`click`, stopChangeColor => {
  click.target.disable = true;
   clearInterval(timeInt);
})

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};