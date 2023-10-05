import { body } from "./burger.js";
import { icon, menuNoAuth } from "./drop-menu.js";
import { initialsInModal, nameInModal, numberCardInModal, singIcon } from "./profile-modal.js";
import { regModal } from "./sing-modal.js";

let users = JSON.parse(localStorage.getItem('users'));  // get object in local storage

let logModal = document.querySelector('.modal-log-in');

let logInModal = document.querySelector('.modal-alredy-acc-log-in');

let logEmail = document.getElementById('log-email');
let logPass = document.getElementById('log-pass');

let logInModalBtn = document.querySelector('.modal-log-in-btn');

let warningLogEmail = document.querySelector('.warning-log-email');
let warningLogPass = document.querySelector('.warning-log-pass');

logInModal.addEventListener('click', () => {                // close log in modal and open sign up 
    logModal.classList.remove('none');
    regModal.classList.add('none');
});

logInModalBtn.addEventListener('click', (e) => {

    e.preventDefault();

    let logEmailVal = '';
    let logPassVal = '';

    if (logPass.value.length < 8) {

        warningLogPass.classList.remove('none')            // log in error password length < 8

    } else {

        warningLogPass.classList.add('none');
        logPassVal = logPass.value;

    }

    if (
        logEmail.value.length <= 6
        || logEmail.value.indexOf('@') == -1
        || logEmail.value.indexOf('.') == -1
    ) 
    {

       warningLogEmail.classList.remove('none')            // log in error email is not a correct

    } else {

       warningLogEmail.classList.add('none'); 
       logEmailVal = logEmail.value;

    }

    if (logEmailVal.length > 0 && logPassVal.length > 0) {

        let secureAcc = false;

        for (let key in users) {

            if (users[key].email === logEmailVal && users[key].password === logPassVal) {
    
                icon.classList.add('none')
                singIcon.classList.remove('none');
                logModal.classList.add('none');
                body.classList.remove('non-scroll')
    
                singIcon.innerHTML = users[key].firstName[0] + users[key].lastName[0];
                singIcon.title = users[key].firstName + ' ' + users[key].lastName   ;
                initialsInModal.innerHTML = users[key].firstName[0] + users[key].lastName[0];
                nameInModal.innerHTML = users[key].firstName + ' ' + users[key].lastName;
                numberCardInModal.innerHTML = users[key].number;
    
                secureAcc = true;
                localStorage.setItem('status', 'true');
    
                break
            }
    
        }

        if (secureAcc === false) {

            alert(`Error in email or password`);
            warningLogEmail.classList.remove('none');
            warningLogPass.classList.remove('none');

        }

    }

});

export { logModal };