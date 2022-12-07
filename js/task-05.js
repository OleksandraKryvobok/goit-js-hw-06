const refs = {
    input: document.querySelector('input#name-input'),
    output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', onInputChange);

function onInputChange (e) {
    const {value} = e.currentTarget;

    if(value === '') {
        refs.output.textContent = 'Anonymous';
    } else {
    refs.output.textContent = value; 
    };
}