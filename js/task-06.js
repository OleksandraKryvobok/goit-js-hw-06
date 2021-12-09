const refs = {
    input: document.querySelector('#validation-input'),
};


const onValueChange = (event) => {
    const { value } = event.target;
    console.log(value.length);

    if (value.trim().length === Number(refs.input.dataset.length)) {
        refs.input.classList.remove('invalid');
        refs.input.classList.add('valid');
    } else {
        refs.input.classList.add('invalid');
        refs.input.classList.remove('valid');
    }
    console.log(refs.input.classList);
}

refs.input.addEventListener('blur', onValueChange);