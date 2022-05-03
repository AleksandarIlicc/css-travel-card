'use strict';

const pulsOne = document.querySelector('.puls--1');
const pulsTwo = document.querySelector('.puls--2');
const accept = document.querySelector('.accept');
const iconAccept = document.querySelector('.icon--accept');
const modal = document.querySelector('.modal');
const background = document.querySelector('.background');
const iconTimes = document.querySelector('.icon--times');

const openModal = () => {
    modal.classList.add('show');
    background.classList.add('show');
    iconTimes.classList.add('show');
}

const closeModal = () => {
    modal.classList.remove('show');
    background.classList.remove('show');
    iconTimes.classList.remove('show');
}

accept.addEventListener('click', () => {
    iconAccept.classList.remove('ring-ring');
    pulsOne.classList.remove('puls--1');
    pulsTwo.classList.remove('puls--2');
    openModal();
});

iconTimes.addEventListener('click', closeModal);

background.addEventListener('click', closeModal);