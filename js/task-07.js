const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
rangeEl.addEventListener('input', onRange);

function onRange(event) {
textEl.style.fontSize = rangeEl.value + 'px';

}

