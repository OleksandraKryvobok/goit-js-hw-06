const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
    e.preventDefault();
    
    const { email, password } = e.currentTarget.elements;

    const infoFromForm = {
        email: email.value, 
        password: password.value,
    }

    if(email.value === '' || password.value === '') {
        alert('Усі поля повинні бути заповнені!');
    } else {
        console.log(infoFromForm);
        email.value.reset;
        e.target.reset();
    }

};

