const refs = {
    emailInput: document.querySelector('input[name="email"]'),
    passwordInput: document.querySelector('input[name="password"]'),
    loginForm: document.querySelector('.login-form'),
};

const result = {};

const handleSubmit = (event) => {
    event.preventDefault();

    const {
        elements: { email, password }
    } = event.target;

    if (email.value === '' || password.value === '') {
        alert('Все поля должны быть заполнены!');
    } else {
        result.email = email.value;
        result.password = password.value;
        console.log(result);
        event.target.reset();
    }
}

refs.loginForm.addEventListener('submit', handleSubmit);