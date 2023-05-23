function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const divControls = document.querySelector('#controls');
const divBoxes = document.querySelector('#boxes');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');


createBtn.addEventListener('click', onCreateBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

 

function onCreateBoxes(event) {
  let amount = divControls.firstElementChild.value;
  const arrDiv = [];
  let divSize = 30;
  function createBoxes(amount) {
    for (let i = 0; i < amount; i += 1) {
      const divEl = document.createElement('div');
      let divColor = getRandomHexColor();
      divSize += 10;
      divEl.style.width = `${divSize}px`;
      divEl.style.height = `${divSize}px`;
      divEl.style.backgroundColor = `${divColor}`;
      divEl.style.marginBottom = '20px'
      arrDiv.push(divEl);

    }
    divBoxes.append(...arrDiv);
    console.log(divBoxes);

  }
  createBoxes(amount);
}

function destroyBoxes() {
  divBoxes.remove();
  divControls.firstElementChild.value = "";
}

