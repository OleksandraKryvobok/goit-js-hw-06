const refs = {
    btnDecrement: document.querySelector('[data-action="decrement"]'),
    btnIncrement: document.querySelector('[data-action="increment"]'),
    counter: document.querySelector('#value'),
};

let counterValue = 0;

refs.btnDecrement.addEventListener('click', () => counterOfClicks(-1));

refs.btnIncrement.addEventListener('click', () => counterOfClicks(1));

function counterOfClicks(number) {
    counterValue += number;
    refs.counter.textContent = counterValue;
}



