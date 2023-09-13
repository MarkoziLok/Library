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

logInInDropMenuBtn.addEventListener('click', () => {
    logModal.classList.toggle('none');
    regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none')
})

regInInDropMenuBtn.addEventListener('click', () => {
    regModal.classList.toggle('none');
    regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none')
})

for (let i = 0; i < modalCross.length; i++) {
    modalCross[i].addEventListener('click', () => {
        logModal.classList.add('none');
        regModal.classList.add('none');
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