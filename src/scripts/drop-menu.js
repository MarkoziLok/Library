let icon = document.querySelector('.register-icon');
let menuAuth = document.querySelector('.drop-menu-auth');
let menuNoAuth = document.querySelector('.drop-menu-no-auth');

let regStat = false;

let logInInDropMenuBtn = document.querySelector('.log-in');
let regInInDropMenuBtn = document.querySelector('.register');
let logModal = document.querySelector('.modal-log-in');
let regModal = document.querySelector('.modal-register');

let logInModal = document.querySelector('.modal-alredy-acc-log-in');
let regInModal = document.querySelector('.modal-none-acc-register');

let modalCross = document.querySelectorAll('.modal-cross');

let logEmail = document.getElementById('log-email');
let logPass = document.getElementById('log-pass');
let regEmail = document.getElementById('reg-email');
let regPass = document.getElementById('reg-pass');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');

let logInModalBtn = document.querySelector('.modal-log-in-btn');
let regInModalBtn = document.querySelector('.modal-reg-btn');

import { burger, burgerElem, body, navBar } from "./burger.js";

icon.addEventListener('click', () => {
    regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none');

    burger.classList.remove('rotate-pad')
    navBar.classList.add('nav-none'); 
    burgerElem.classList.remove('rotate')
    body.classList.remove('non-scroll') // close burger
})

window.addEventListener('click', (e) => { 
    const target = e.target;
    if (
        !target.closest('.drop-menu-no-auth') && 
        !target.closest('.drop-menu-auth') && 
        !target.closest('.register-icon')
        ) {
            regStat === true ? menuAuth.classList.add('none') : menuNoAuth.classList.add('none');
        }
}); // close drop-menu if click none on icon or drop-menu

export { menuAuth, menuNoAuth};

// open and close modals 

logInInDropMenuBtn.addEventListener('click', () => {
    logModal.classList.toggle('none');
    body.classList.add('non-scroll');
    regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none')
})

regInInDropMenuBtn.addEventListener('click', () => {
    regModal.classList.toggle('none');
    body.classList.add('non-scroll');
    regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none')
})

for (let i = 0; i < modalCross.length; i++) {
    modalCross[i].addEventListener('click', () => {
        logModal.classList.add('none');
        regModal.classList.add('none');
        body.classList.remove('non-scroll');
        regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none')
    })
}

logInModal.addEventListener('click', () => {
    logModal.classList.remove('none');
    regModal.classList.add('none');
})

regInModal.addEventListener('click', () => {
    logModal.classList.add('none');
    regModal.classList.remove('none');
})

window.addEventListener('click', (e) => { 
    const target = e.target;
    if (
        !target.closest('.modal-log-in') && 
        !target.closest('.modal-register') &&
        !target.closest('.register-icon') &&
        !target.closest('.drop-menu-link')
        ) {
            regModal.classList.add('none');
            logModal.classList.add('none');
            body.classList.remove('non-scroll');
        }
}); // close modal if click none on modal

logInModalBtn.addEventListener('click', () => {
    logPass.value.length < 8 ? alert('Error: Password < 8 symbols') : console.log('Ok');
    logEmail.value.length < 1 ? alert('Error: Please, add you Email') : console.log('Ok');
})

regInModalBtn.addEventListener('click', () => {
    regPass.value.length < 8 ? alert('Error: Password < 8 symbols') : console.log('Ok');
    regEmail.value.length < 1 
    || firstName.value.length < 1 
    || lastName.value.length < 1 
    ? alert('Error: Please, fill in all required fields') 
    : console.log('Ok')
})