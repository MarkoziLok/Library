import { burger, burgerElem, body, navBar } from "./burger.js";
import { logModal } from "./log-modal.js";
import { regModal } from "./sing-modal.js";


let icon = document.querySelector('.register-icon');
let menuAuth = document.querySelector('.drop-menu-auth');
let menuNoAuth = document.querySelector('.drop-menu-no-auth');

let regInInDropMenuBtn = document.querySelector('.register');
let logInInDropMenuBtn = document.querySelector('.log-in');

let regStat = false;


icon.addEventListener('click', () => {
    regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none');

    burger.classList.remove('rotate-pad');
    navBar.classList.add('nav-none'); 
    burgerElem.classList.remove('rotate');
    body.classList.remove('non-scroll'); // close burger
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

logInInDropMenuBtn.addEventListener('click', () => {        // open login modal
    logModal.classList.toggle('none');
    body.classList.add('non-scroll');
});

regInInDropMenuBtn.addEventListener('click', () => {        // open sing up modal
    regModal.classList.toggle('none');
    body.classList.add('non-scroll');
});

export { icon, menuAuth, menuNoAuth };