// Js for burger menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
})


// Js for the list in the projects section

const filterLinks = document.querySelectorAll('[data-filter]');
const cards = document.querySelectorAll('[data-category]');
const line = document.querySelector('.projects__filter-line');

filterLinks[0].classList.add('active');

filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const category = link.dataset.filter;

        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        filterLinks.forEach(f => f.classList.remove('active'));
        link.classList.add('active');
        link.prepend(line);
    });
});