import { body } from "./burger.js";

let logInInDropMenuBtn = document.querySelector('.log-in');
let logModal = document.querySelector('.modal-log-in');

let logInModal = document.querySelector('.modal-alredy-acc-log-in');

let logEmail = document.getElementById('log-email');
let logPass = document.getElementById('log-pass');

let logInModalBtn = document.querySelector('.modal-log-in-btn');

let logPassTitle = document.querySelector('.modal-log-in-pass-title');
let logEmailTitle = document.querySelector('.modal-log-in-email-title'); 

// log in lets


let regModal = document.querySelector('.modal-register');
let regInInDropMenuBtn = document.querySelector('.register');

let regInModal = document.querySelector('.modal-none-acc-register');

let modalCross = document.querySelectorAll('.modal-cross');

let regEmail = document.getElementById('reg-email');
let regPass = document.getElementById('reg-pass');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');

let regInModalBtn = document.querySelector('.modal-reg-btn');

// reg lets

let cardSingUpBtn = document.querySelector('.card-sing-up');
let cardLogInBtn = document.querySelector('.card-log-in');
let buyBtn = document.querySelectorAll('.favorites-book-buy')

// buttons in card section & buy buttons

let firstTitle = document.querySelector('.first-title');
let lastTitle = document.querySelector('.last-title');
let regPassTitle = document.querySelector('.reg-pass-title');
let regEmailTitle = document.querySelector('.reg-email-title'); 

// inputs

logInInDropMenuBtn.addEventListener('click', () => {
    logModal.classList.toggle('none');
    body.classList.add('non-scroll');
    regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none')
});

regInInDropMenuBtn.addEventListener('click', () => {
    regModal.classList.toggle('none');
    body.classList.add('non-scroll');
    regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none')
});

// open sing and reg modal

logInModal.addEventListener('click', () => {
    logModal.classList.remove('none');
    regModal.classList.add('none');
});

regInModal.addEventListener('click', () => {
    logModal.classList.add('none');
    regModal.classList.remove('none');
});

// in modal log in sin

logInModalBtn.addEventListener('click', () => {
    logPass.value.length < 8 
    ? logPassTitle.classList.add('non-correct')
    : logPassTitle.classList.remove('non-correct');
    logEmail.value.length <= 6 
    && regEmail.value.indexOf('@') == -1
    && regEmail.value.indexOf('.') == -1
    ? logEmailTitle.classList.add('non-correct')
    : logEmailTitle.classList.remove('non-correct');
})

regInModalBtn.addEventListener('click', () => {
    regEmail.value.length <= 6 
    && regEmail.value.indexOf('@') == -1
    && regEmail.value.indexOf('.') == -1
    ? regEmailTitle.classList.add('non-correct')
    : regEmailTitle.classList.remove('non-correct');
})

regInModalBtn.addEventListener('click', () => {
    regPass.value.length < 8
    ? regPassTitle.classList.add('non-correct')
    : regPassTitle.classList.remove('non-correct');
    firstName.value.length < 1
    ? firstTitle.classList.add('non-correct')
    : firstTitle.classList.remove('non-correct');
    lastName.value.length < 1
    ? lastTitle.classList.add('non-correct')
    : lastTitle.classList.remove('non-correct');
})

// inputs empty error

cardLogInBtn.addEventListener('click', () => {
    logModal.classList.remove('none');
    body.classList.add('non-scroll');
})

cardSingUpBtn.addEventListener('click', () => {
    regModal.classList.remove('none');
    body.classList.add('non-scroll');
})

for (let i = 0; i < buyBtn.length; i++) {
    buyBtn[i].addEventListener('click', () => {
        logModal.classList.remove('none');
        body.classList.add('non-scroll');
    })
} 

// buttons in card section open modals

for (let i = 0; i < modalCross.length; i++) {
    modalCross[i].addEventListener('click', () => {
        logModal.classList.add('none');
        regModal.classList.add('none');
        body.classList.remove('non-scroll');
        regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none')
    })
};

window.addEventListener('click', (e) => { 
    const target = e.target;
    if (
        !target.closest('.modal-log-in') && 
        !target.closest('.modal-register') &&
        !target.closest('.register-icon') &&
        !target.closest('.drop-menu-link') &&
        !target.closest('.card-log-in') &&
        !target.closest('.card-sing-up') &&
        !target.closest('.favorites-book-buy')
        ) {
            regModal.classList.add('none');
            logModal.classList.add('none');
            body.classList.remove('non-scroll');
        }
}); // close modal if click none on modal