'use strict';

const pulsOne = document.querySelectorAll('.puls--1');
const pulsTwo = document.querySelectorAll('.puls--1');
const accept = document.querySelector('.accept');
const iconAccept = document.querySelector('.icon--accept');

window.addEventListener('load', () => {
    iconAccept.classList.add('ring-ring');
    pulsOne.classList.add('puls--1');
    pulsTwo.classList.add('puls--2');
})

accept.addEventListener('click', () => {
    iconAccept.classList.remove('ring-ring');
    pulsOne.classList.remove('puls--1');
    pulsTwo.classList.remove('puls--2');
})