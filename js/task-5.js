'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const body = document.querySelector("body");
const spanColor = document.querySelector('.color');
const BtnChangeColor = document.querySelector('.change-color');

BtnChangeColor.addEventListener('click', () =>  {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  spanColor.textContent = randomColor;
});