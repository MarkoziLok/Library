let burger = document.querySelector('.burger');
let burgerElem = document.querySelector('.burger-elem');
let navBar = document.querySelector('.nav-bar');
let body = document.querySelector('.body')
let navItem = document.querySelectorAll('.nav-li')

import { menuNoAuth, menuAuth } from "./drop-menu.js";
import { profileModal } from "./modal.js";

burger.addEventListener('click', () => {
    burger.classList.toggle('rotate-pad')
    navBar.classList.toggle('nav-none');
    burgerElem.classList.toggle('rotate')
    body.classList.toggle('non-scroll')

    profileModal.classList.add('none');
    menuAuth.classList.add('none');
    menuNoAuth.classList.add('none'); // close drop-menu
})

for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', () => {
        burger.classList.toggle('rotate-pad')
        navBar.classList.toggle('nav-none');
        burgerElem.classList.toggle('rotate')
        body.classList.toggle('non-scroll')
    })
}

export {burger, burgerElem, body, navBar};