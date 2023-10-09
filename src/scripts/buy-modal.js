import { body } from "./burger.js";
import { getStatusSing } from "./slider.js";

let buyBtns = document.querySelectorAll('.favorites-book-buy');
let buyModal = document.querySelector('.modal-buy');
let cross = document.querySelector('.modal-cross-white');

let inputs = document.querySelectorAll('.modal-buy-input');
let buyCard = document.querySelector('.modal-buy-submit');

let booksScoreInProfile = document.querySelector('.books-score-in-card');
let booksScoreInCardSect = document.querySelector('.books-score');

function getUsers() {
    return JSON.parse(localStorage.getItem('users'));
};

let users = getUsers();

let cardStat = 'false';

let bttn = 0;

for (let i = 0; i < buyBtns.length; i++) {

    buyBtns[i].addEventListener('click', () => {

        users = getUsers();

        if (getStatusSing() === 'true') {

            if (cardStat === 'false') {

                buyModal.classList.remove('none');
                bttn = i;
                body.classList.add('non-scroll');

            } else {

                buyBtns[i].innerHTML = 'Own';
                buyBtns[i].classList.remove('favorites-book-buy');
                buyBtns[i].classList.add('favorites-book-own');

                localStorage.setItem('users', JSON.stringify(users));

            };

        };

    });

};

buyCard.addEventListener('click', (e) => {
    e.preventDefault();

    for (let i = 0; i < inputs.length; i++) {

        if (inputs[i].value.length > 1) {

            users = getUsers();

            buyModal.classList.add('none');
            body.classList.remove('non-scroll');
            buyBtns[bttn].innerHTML = 'Own';
            buyBtns[bttn].classList.remove('favorites-book-buy');
            buyBtns[bttn].classList.add('favorites-book-own');
            cardStat = 'true';

            alert('Ха-ха заскамила мамонта!');

            localStorage.setItem('users', JSON.stringify(users));

            break

        } else {

            alert('Add correct data')
            break

        };

    };

});

cross.addEventListener('click', () => {

    buyModal.classList.add('none');
    body.classList.remove('non-scroll');

});

export { buyModal }