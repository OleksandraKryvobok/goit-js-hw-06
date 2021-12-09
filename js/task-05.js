const refs = {
    input: document.querySelector('#name-input'),
    name: document.querySelector('#name-output'),
};

const changeName = (event) => {
    let { value } = event.target;
    console.log(value);
    if (value != '') {
        refs.name.textContent = value.trim();
    } else {
        refs.name.textContent = 'Anonymous';
    }
}

refs.input.addEventListener('input', changeName);

