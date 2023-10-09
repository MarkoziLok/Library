import { body } from "./burger.js";
import { buyModal } from "./buy-modal.js";
import { icon } from "./drop-menu.js";
import { charactersInCard, submit, visitsScoreInCard } from "./get-card.js";
import { logModal } from "./log-modal.js";
import { singIcon, profileModal, initialsInModal, nameInModal, numberCardInModal } from "./profile-modal.js";

let regModal = document.querySelector('.modal-register');

let regInModal = document.querySelector('.modal-none-acc-register');

let modalCross = document.querySelectorAll('.modal-cross');

let regEmail = document.getElementById('reg-email');
let regPass = document.getElementById('reg-pass');
let firstName = document.getElementById('first-name');
let lastName = document.getElementById('last-name');

let regInModalBtn = document.querySelector('.modal-reg-btn');

let warningFirst = document.querySelector('.warning-first');
let warningLast = document.querySelector('.warning-last');
let warningEmail = document.querySelector('.warning-email');
let warningPass = document.querySelector('.warning-pass');

let numInDrop = document.querySelector('.profile-number');

let visitsScore = document.querySelector('.visits-score');

let contentCardSection = document.querySelector('.library-card-get-wrapper');
let contentCardSectionSing = document.querySelector('.library-card-get-wrapper-sing');

let number = '';

let users = {};

function User(firstName, lastName, email, password, number, visits, books, id) { // constructor 
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.number = number;
    this.visits = visits;
}

function createId(users) {                            // createId function
    return Object.keys(users).length;
};

users = JSON.parse(localStorage.getItem('users'))  // get object in local storage
localStorage.setItem('status', 'false');

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

regInModal.addEventListener('click', () => {                // close sing in modal and open log up
    logModal.classList.add('none');
    regModal.classList.remove('none');
});

regInModalBtn.addEventListener('click', (e) => {            // register 

    e.preventDefault();

    let firstNameVal = '';
    let lastNameVal = '';
    let emailVal = '';
    let passwordVal = '';
    let visitsVal = 1;                                   // lets for saved data user
    
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

        if (typeof users.User0 !== undefined) {             // if local storage is not empty

            for (let key in users) {                        // secure email double
                users[key].email === emailVal           
                ? counter++
                : console.log('He he boy...')
            };

        };
        
        if (counter > 0) {                                  // error if use saved email

            alert('This email is already registered');
            warningEmail.classList.remove('none');

        } else {                                            // record new user in localstorage

            number = generateNumber();

            const user = new User (firstNameVal, lastNameVzal, emailVal, passwordVal, number, visitsVal);
            const userId = 'User' + createId(users);
            
            warningEmail.classList.add('none');
            users[userId] = user;

            alert('You are create account.');

            icon.classList.add('none')
            singIcon.classList.remove('none');
            regModal.classList.add('none');
            body.classList.remove('non-scroll')

            singIcon.innerHTML = firstNameVal[0] + lastNameVal[0];
            singIcon.title = firstNameVal + ' ' + lastNameVal;
            initialsInModal.innerHTML = firstNameVal[0] + lastNameVal[0];
            nameInModal.innerHTML = firstNameVal + ' ' + lastNameVal;
            numberCardInModal.innerHTML = number;
            visitsScore.innerHTML = visitsVal;
            visitsScoreInCard.innerHTML = users[userId].visits;
            numInDrop.innerHTML = number;

            submit.classList.add('none');
            charactersInCard.classList.remove('none');

            contentCardSection.classList.add('none');
            contentCardSectionSing.classList.remove('none');
                    
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('status', 'true');

        };
        
    };

});

for (let i = 0; i < modalCross.length; i++) {               // cross close modals
    modalCross[i].addEventListener('click', () => {
        logModal.classList.add('none');
        regModal.classList.add('none');
        profileModal.classList.add('none');
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
        !target.closest('.favorites-book-buy') &&
        !target.closest('.modal-profile') &&
        !target.closest('.sing-icon') && 
        !target.closest('.visit-profile-in-card-section') &&
        !target.closest('.modal-buy')
        ) {
            regModal.classList.add('none');
            logModal.classList.add('none');
            profileModal.classList.add('none');
            body.classList.remove('non-scroll');
            buyModal.classList.add('none');
        }
});

export { regModal, numInDrop, visitsScore, contentCardSection, contentCardSectionSing };