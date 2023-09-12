let icon = document.querySelector('.register-icon');
let menuAuth = document.querySelector('.drop-menu-auth');
let menuNoAuth = document.querySelector('.drop-menu-no-auth');

let regStat = false;

import { burger, burgerElem, body, navBar } from "./burger.js";

icon.addEventListener('click', () => {
    regStat === true ? menuAuth.classList.toggle('none') : menuNoAuth.classList.toggle('none');

    burger.classList.remove('rotate-pad')
    navBar.classList.add('nav-none'); 
    burgerElem.classList.remove('rotate')
    body.classList.remove('non-scroll') // close burger
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

export { menuAuth, menuNoAuth};