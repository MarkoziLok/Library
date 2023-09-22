let inputBttn = document.querySelectorAll('.favorites-button-input');

let books = document.querySelectorAll('.favorites-books-wrapper');

let activeBlock = 0;

for (let i = 0; i < inputBttn.length; i++) {
    inputBttn[i].addEventListener('click', () => {
        books[activeBlock].classList.remove('fade-out')
        books[activeBlock].classList.add('fade-in')
        books[i].classList.remove('fade-in')
        books[i].classList.add('fade-out')
        activeBlock = i
    })
}