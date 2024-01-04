'use strict'


const form = document.querySelector('.login-form')

form.addEventListener('submit', eventSubmit)

function eventSubmit(event) {
    event.preventDefault()
    const {elements: { email, password },} = event.currentTarget;

    if (email.value === '' || password.value === '') {
        alert("All form fields must be filled in");
        return;
    }
   
    const userData = { email: email.value, Password: password.value };
    
    console.log(userData);
    event.currentTarget.reset();
    form.reset();
};


