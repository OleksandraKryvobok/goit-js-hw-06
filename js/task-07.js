const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', onRangeChange);

function onRangeChange(e) {
    const { value } = e.currentTarget;

    textEl.style.fontSize = `${value}px`;
};
