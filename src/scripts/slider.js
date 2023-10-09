import { body } from "./burger.js";
import { logModal } from "./log-modal.js";

let inputBttn = document.querySelectorAll('.favorites-button-input');

let books = document.querySelectorAll('.favorites-books-wrapper');

let activeBlock = 0;

let buyBtn = document.querySelectorAll('.favorites-book-buy');

for (let i = 0; i < inputBttn.length; i++) {
    inputBttn[i].addEventListener('click', () => {
        books[activeBlock].classList.remove('fade-out')
        books[activeBlock].classList.add('fade-in')
        books[i].classList.remove('fade-in')
        books[i].classList.add('fade-out')
        activeBlock = i
    })
};

function getStatusSing () {
    return localStorage.getItem('status')
};

for (let i = 0; i < buyBtn.length; i++) {                   // open log in modal if press 'buy' button
    buyBtn[i].addEventListener('click', () => {
        if (getStatusSing() === 'false') {
            logModal.classList.remove('none');
            body.classList.add('non-scroll');
        };
    });
};

export { getStatusSing }