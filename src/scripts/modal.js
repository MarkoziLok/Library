import { body } from "./burger.js";

let logInInDropMenuBtn = document.querySelector('.log-in');
let logModal = document.querySelector('.modal-log-in');

let logInModal = document.querySelector('.modal-alredy-acc-log-in');

let logEmail = document.getElementById('log-email');
let logPass = document.getElementById('log-pass');

let logInModalBtn = document.querySelector('.modal-log-in-btn');

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

let warningFirst = document.querySelector('.warning-first');
let warningLast = document.querySelector('.warning-last');
let warningEmail = document.querySelector('.warning-email');
let warningPass = document.querySelector('.warning-pass');

let warningLogEmail = document.querySelector('.warning-log-email');
let warningLogPass = document.querySelector('.warning-log-pass');

// non correct warning's

let users = {};

function User(firstName, lastName, email, password, number) { // constructor 
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.number = number;
}

function createId(users) {                            // createId function
    return Object.keys(users).length;
};

users = JSON.parse(localStorage.getItem('users'))  // get object in local storage

logInInDropMenuBtn.addEventListener('click', () => {        // open login modal
    logModal.classList.toggle('none');
    body.classList.add('non-scroll');
});

regInInDropMenuBtn.addEventListener('click', () => {        // open sing up modal
    regModal.classList.toggle('none');
    body.classList.add('non-scroll');
});

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

function generateNumber() {
    let result = '';
    const charactersLength = characters.length;
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    for (let i = 0; i < 8; i++) {
        result += Math.floor(Math.random() * 10)
    }
    
    return result;
}

// open sing and reg modal

logInModal.addEventListener('click', () => {                // close log in modal and open sign up 
    logModal.classList.remove('none');
    regModal.classList.add('none');
});

regInModal.addEventListener('click', () => {                // close sing in modal and open log up
    logModal.classList.add('none');
    regModal.classList.remove('none');
});

// in modal log in sin

logInModalBtn.addEventListener('click', (e) => {

    e.preventDefault();

    if (logPass.value.length < 8) {

        warningLogPass.classList.remove('none')            // log in error password length < 8

    } else {

        warningLogPass.classList.add('none');

    }

    if (
        logEmail.value.length <= 6
        && regEmail.value.indexOf('@') == -1
        && regEmail.value.indexOf('.') == -1
    ) 
    {

       warningLogEmail.classList.remove('none')            // log in error email is not a correct

    } else {

       warningLogEmail.classList.add('none'); 

    } 

})

regInModalBtn.addEventListener('click', (e) => {

    e.preventDefault();

    let firstNameVal = '';
    let lastNameVal = '';
    let emailVal = '';
    let passwordVal = '';                                   // lets for saved data user
    
    if (firstName.value.length < 1) {

        warningFirst.classList.remove('none')               // error none first name

    } else {

        warningFirst.classList.add('none')
        firstNameVal = firstName.value;

    }

    if (lastName.value.length < 1) {

        warningLast.classList.remove('none')                // error none last name

    } else {

        warningLast.classList.add('none')
        lastNameVal = lastName.value;

    }

    if (
        regEmail.value.length <= 6 
        && regEmail.value.indexOf('@') == -1
        && regEmail.value.indexOf('.') == -1
    ) 
    {
       
        warningEmail.classList.remove('none')               // error if email none correct

    } else {

        warningEmail.classList.add('none')
        emailVal = regEmail.value;

    }

    if (regPass.value.length < 8) {

        warningPass.classList.remove('none')                // error password length < 8

    } else {

        warningPass.classList.add('none')
        passwordVal = regPass.value;

    }

    if (
        firstNameVal.length > 0
        && lastNameVal.length > 0
        && emailVal.length > 0
        && passwordVal.length > 0                           // if all datas is correct
    ) 
    {
        let counter = 0;                                    // let for secure double use also email

        if (typeof users.User0 !== undefined) {        // if local storage is not empty

            for (let key in users) {                   // no working secure :(
                users[key].email === emailVal           
                ? counter++
                : console.log(users)
            };

        }
        
        if (counter > 0) {                           // error if use saved email

            alert('This email is already registered');
            warningEmail.classList.remove('none');

        } else {                                            // record new user in localstorage

            let number = generateNumber();

            const user = new User (firstNameVal, lastNameVal, emailVal, passwordVal, number);
            const userId = 'User' + createId(users);
            
            warningEmail.classList.add('none');
            users[userId] = user;

            alert('You are create account. You can login');

            logModal.classList.remove('none');
            regModal.classList.add('none');
                    
            localStorage.setItem('users', JSON.stringify(users));

        }
        
    }

})

console.log(users)

// inputs empty error

cardLogInBtn.addEventListener('click', () => {              // open log in modal in card section
    logModal.classList.remove('none');
    body.classList.add('non-scroll');
})

cardSingUpBtn.addEventListener('click', () => {             // open sing up modal in card section
    regModal.classList.remove('none');
    body.classList.add('non-scroll');
})

for (let i = 0; i < buyBtn.length; i++) {                   // open log in modal if press 'buy' button
    buyBtn[i].addEventListener('click', () => {
        logModal.classList.remove('none');
        body.classList.add('non-scroll');
    })
} 

// buttons in card section open modals

for (let i = 0; i < modalCross.length; i++) {               // cross close modals
    modalCross[i].addEventListener('click', () => {
        logModal.classList.add('none');
        regModal.classList.add('none');
        body.classList.remove('non-scroll');
    })
};

window.addEventListener('click', (e) => {                   // close modal if click none on modal
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
});