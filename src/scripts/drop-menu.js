import { burger, burgerElem, body, navBar } from "./burger.js";
import { charactersInCard, submit } from "./get-card.js";
import { logModal } from "./log-modal.js";
import { profileModal, singIcon } from "./profile-modal.js";
import { regModal, contentCardSection, contentCardSectionSing } from "./sing-modal.js";

let icon = document.querySelector('.register-icon');
let menuAuth = document.querySelector('.drop-menu-auth');
let menuNoAuth = document.querySelector('.drop-menu-no-auth');

let regInInDropMenuBtn = document.querySelector('.register');
let logInInDropMenuBtn = document.querySelector('.log-in');

let profileInDropMenuBtn = document.querySelector('.profile');
let logOutInDropMenuBtn = document.querySelector('.log-out');

icon.addEventListener('click', () => {
    menuNoAuth.classList.toggle('none');

    burger.classList.remove('rotate-pad');
    navBar.classList.add('nav-none'); 
    burgerElem.classList.remove('rotate');
    body.classList.remove('non-scroll'); // close burger
});

logInInDropMenuBtn.addEventListener('click', () => {        // open login modal
    logModal.classList.toggle('none');
    menuNoAuth.classList.add('none');
    body.classList.add('non-scroll');
});

regInInDropMenuBtn.addEventListener('click', () => {        // open sing up modal
    regModal.classList.toggle('none');
    menuNoAuth.classList.add('none');
    body.classList.add('non-scroll');
});



singIcon.addEventListener('click', () => {                  // modal if user log in account
    menuAuth.classList.remove('none');
    burger.classList.remove('rotate-pad');
    navBar.classList.add('nav-none'); 
    burgerElem.classList.remove('rotate');
});

profileInDropMenuBtn.addEventListener('click', () => {      // open profile modal
    profileModal.classList.remove('none');
    body.classList.add('non-scroll');
    menuAuth.classList.add('none');
});

logOutInDropMenuBtn.addEventListener('click', () => {
    icon.classList.remove('none');
    singIcon.classList.add('none');
    menuAuth.classList.add('none');

    submit.classList.remove('none'); 
    charactersInCard.classList.add('none');

    contentCardSection.classList.remove('none');
    contentCardSectionSing.classList.add('none');
            
    localStorage.setItem('status', 'false');
});



window.addEventListener('click', (e) => {                   // close drop-menu if click none on icon or drop-menu
    const target = e.target;
    if (
        !target.closest('.drop-menu-no-auth') && 
        !target.closest('.drop-menu-auth') && 
        !target.closest('.register-icon') &&
        !target.closest('.sing-icon')
        ) {
            menuAuth.classList.add('none');
            menuNoAuth.classList.add('none');
        }
}); 

export { icon, menuAuth, menuNoAuth };