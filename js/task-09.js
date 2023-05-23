function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

changeBtn.addEventListener('click', onChangeColor);

function onChangeColor(event) {
  let color = getRandomHexColor();
  colorEl.textContent = color;
  document.body.style.backgroundColor = `${color}`;
}

