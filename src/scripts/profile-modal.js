import { body, burger, burgerElem, navBar } from "./burger.js";

let singIcon = document.querySelector('.sing-icon');
let profileModal = document.querySelector('.modal-profile');

let initialsInModal = document.querySelector('.initials-in-modal');
let nameInModal = document.querySelector('.modal-profile-name');
let numberCardInModal = document.querySelector('.number-card-in-modal');
let copyBtn = document.querySelector('.copy-icon');

singIcon.addEventListener('click', () => {
    profileModal.classList.remove('none');
    body.classList.add('non-scroll');
    burger.classList.remove('rotate-pad');
    navBar.classList.add('nav-none'); 
    burgerElem.classList.remove('rotate');
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(number);
    alert('Number copied.')
});

export { singIcon, profileModal, initialsInModal, nameInModal, numberCardInModal }