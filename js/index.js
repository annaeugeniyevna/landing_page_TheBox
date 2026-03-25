// Js for burger menu

const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav__menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
})


// Js for the list and cards in the projects section

const filterLinks = document.querySelectorAll('[data-filter]');
const cards = [...document.querySelectorAll('[data-category]')];
const dots = [...document.querySelectorAll('.projects__dot, .projects__dot--active')];
const line = document.querySelector('.projects__filter-line');
const btnNext = document.querySelector('.projects__btn-next');
const btnPrev = document.querySelector('.projects__btn-prev');

const CARDS_PER_PAGE = 4;
let currentPage = 0;
let activeFilter = 'all';

// ===== Logic =====

function getFiltered() {
    return cards.filter(card => 
        activeFilter === 'all' || card.dataset.category === activeFilter
    );
}

function render() {
    const filtered = getFiltered();
    const total = Math.ceil(filtered.length / CARDS_PER_PAGE);

    if (currentPage >= total) currentPage = Math.max(0, total - 1);

    cards.forEach(card => card.hidden = true);
    filtered.slice(currentPage * CARDS_PER_PAGE, (currentPage + 1) * CARDS_PER_PAGE).forEach(card => card.hidden = false);

    btnPrev.disabled = currentPage === 0;
    btnNext.disabled = currentPage >= total - 1;

    dots.forEach((dot, i) => {
        dot.classList.toggle('projects__dot--active', i === currentPage);
        dot.classList.toggle('projects__dot', i !== currentPage);
    });
}

// ===== Events =====

filterLinks[0].classList.add('active');

filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        filterLinks.forEach(f => f.classList.remove('active'));
        link.classList.add('active');
        link.prepend(line);

        activeFilter = link.dataset.filter;
        currentPage = 0;
        render();
    });
});

btnPrev.addEventListener('click', () => {
    currentPage--;
    render();
});
btnNext.addEventListener('click', () => {
    currentPage++;
    render();
});

render();