let singIcon = document.querySelector('.sing-icon');
let profileModal = document.querySelector('.modal-profile');

let initialsInModal = document.querySelector('.initials-in-modal');
let nameInModal = document.querySelector('.modal-profile-name');
let numberCardInModal = document.querySelector('.number-card-in-modal');
let copyBtn = document.querySelector('.copy-icon');

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(number);
    alert('Number copied.')
});

export { singIcon, profileModal, initialsInModal, nameInModal, numberCardInModal }