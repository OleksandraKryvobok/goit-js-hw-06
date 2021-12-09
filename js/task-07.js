const refs = {
    range: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};

const onRangeChange = (event) => {
    const { value } = event.target;
    refs.text.style.fontSize = `${value}px`;
    console.log(event);
};

refs.range.addEventListener('input', onRangeChange);