let burger = document.querySelector('.burger');
let burgerElem = document.querySelector('.burger-elem');
let navBar = document.querySelector('.nav-bar');
let body = document.querySelector('.body')
let navItem = document.querySelectorAll('.nav-li')

burger.addEventListener('click', () => {
    burger.classList.toggle('rotate-pad')
    navBar.classList.toggle('nav-none');
    burgerElem.classList.toggle('rotate')
    body.classList.toggle('non-scroll')
})

for (let i = 0; i < navItem.length; i++) {
    navItem[i].addEventListener('click', () => {
        burger.classList.toggle('rotate-pad')
        navBar.classList.toggle('nav-none');
        burgerElem.classList.toggle('rotate')
        body.classList.toggle('non-scroll')
    })
}