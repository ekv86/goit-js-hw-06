let counterValue = 0;
const decrementEl = document.querySelector('[data-action="decrement"]');
const incrementEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementEl.addEventListener('click', function () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
})

incrementEl.addEventListener('click', function () {
    counterValue += 1;
    valueEl.textContent = counterValue;
})
