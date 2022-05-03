'use strict';

const pulsOne = document.querySelector('.puls--1');
const pulsTwo = document.querySelector('.puls--2');
const accept = document.querySelector('.accept');
const iconAccept = document.querySelector('.icon--accept');

accept.addEventListener('click', () => {
    iconAccept.classList.remove('ring-ring');
    pulsOne.classList.remove('puls--1');
    pulsTwo.classList.remove('puls--2');
})