import { body } from "./burger.js";
import { logModal } from "./log-modal.js";
import { profileModal } from "./profile-modal.js";
import { regModal } from "./sing-modal.js";

let submit = document.querySelector('.library-card-find-button');

let cardSingUpBtn = document.querySelector('.card-sing-up');
let cardLogInBtn = document.querySelector('.card-log-in');

let nameInp = document.querySelector('.reader-name-input');
let numInp = document.querySelector('.card-number-input');

let charactersInCard = document.querySelector('.profile-characters');

let visitProfile = document.querySelector('.visit-profile-in-card-section');
let visitsScoreInCard = document.querySelector('.visits-score-in-card');

let users = JSON.parse(localStorage.getItem('users'))  // get object in local storage
console.log(users)

submit.addEventListener('click', (e) => {
    e.preventDefault();
})

cardLogInBtn.addEventListener('click', () => {              // open log in modal in card section
    logModal.classList.remove('none');
    body.classList.add('non-scroll');
})

cardSingUpBtn.addEventListener('click', () => {             // open sing up modal in card section
    regModal.classList.remove('none');
    body.classList.add('non-scroll');
})

nameInp.addEventListener('click', () => {
    nameInp.value = '';
    nameInp.classList.remove('non-correct');
});

numInp.addEventListener('click', () => {
    numInp.value = '';
    numInp.classList.remove('non-correct');
});

submit.addEventListener('click', () => {

    let secure = false;

    if (nameInp.value.length < 6) {
        nameInp.value = `Reader's name`
    } else {
        secure = true;
    };

    if (numInp.value.length < 9) {
        numInp.value = `Card number`
    } else {
        secure = true;
    };

    if (secure === true) {
        for (let key in users) {
            let reader = nameInp.value.split(' ');
            if (
                users[key].firstName === reader[0] &&
                users[key].lastName === reader[1] &&
                users[key].number === numInp.value
            ) {
                visitsScoreInCard.innerHTML = users[key].visits;
                numInp.classList.add('show-score');
                nameInp.classList.add('show-score');
                submit.classList.add('none');
                charactersInCard.classList.remove('none');
                setTimeout(() => {
                    nameInp.value = `Reader's name`
                    numInp.value = `Card number`
                    numInp.classList.remove('show-score');
                    nameInp.classList.remove('show-score');
                    submit.classList.remove('none');
                    charactersInCard.classList.add('none');
                }, 10000)
            }
        }
    };

});

visitProfile.addEventListener('click', () => {
    profileModal.classList.remove('none');
});

export { submit, charactersInCard, visitsScoreInCard }