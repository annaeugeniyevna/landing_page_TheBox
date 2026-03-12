// Js for burger menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
})