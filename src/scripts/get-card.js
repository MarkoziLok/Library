import { body } from "./burger.js";
import { logModal } from "./log-modal.js";
import { regModal } from "./sing-modal.js";

let getBttn = document.querySelector('.library-card-find-button');

let cardSingUpBtn = document.querySelector('.card-sing-up');
let cardLogInBtn = document.querySelector('.card-log-in');

getBttn.addEventListener('click', (e) => {
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
