const formEl = document.querySelector('.login-form');
const btn = document.querySelector('button');

formEl.addEventListener('submit', onFillForm);


function onFillForm(event) {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (!email || !password) {
        alert('всі поля повинні бути заповнені')
    }
    
    if (email && password) {
        const formData = {
            email,
            password
        }

        console.log(formData);
        formEl.reset();
    }
    

}
