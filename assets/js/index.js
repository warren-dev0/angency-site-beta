const navbar = document.querySelector('.navbar');
let navbarHeight = navbar.getBoundingClientRect().height;

navbarHeight += 'px';

document.documentElement.style.setProperty('--scroll-padding-top', navbarHeight);

// testimonial cards

const firstCardList = [...document.querySelectorAll('.card-container')].filter(e => e.hasAttribute('first-selected'));

let firstCard = firstCardList[0];

const secondCardList = [...document.querySelectorAll('.card-container')].filter(e => e.hasAttribute('second-selected'));

let secondCard = secondCardList[0];

const thirdCardList = [...document.querySelectorAll('.card-container')].filter(e => e.hasAttribute('third-selected'));

let thirdCard = thirdCardList[0];

firstCard.addEventListener('click', () => {
    const selected = firstCard.getAttribute('first-selected');

    if (selected === 'false') {
        firstCard.setAttribute('first-selected', true);
        secondCard.setAttribute('second-selected', false);
        thirdCard.setAttribute('third-selected', false);
    }
});

secondCard.addEventListener('click', () => {
    const selected = secondCard.getAttribute('second-selected');

    if (selected === 'false') {
        secondCard.setAttribute('second-selected', true);
        firstCard.setAttribute('first-selected', false);
        thirdCard.setAttribute('third-selected', false);
    }
});

thirdCard.addEventListener('click', () => {
    const selected = thirdCard.getAttribute('third-selected');

    if (selected === 'false') {
        thirdCard.setAttribute('third-selected', true);
        firstCard.setAttribute('first-selected', false);
        secondCard.setAttribute('second-selected', false);
    }
});


// faq cards 

const oneCardList = [...document.querySelectorAll('.card-container')].filter(e => e.hasAttribute('one-open'));
let oneCard = oneCardList[0];

const twoCardList = [...document.querySelectorAll('.card-container')].filter(e => e.hasAttribute('two-open'));
let twoCard = twoCardList[0];

const threeCardList = [...document.querySelectorAll('.card-container')].filter(e => e.hasAttribute('three-open'));
let threeCard = threeCardList[0];

const fourCardList = [...document.querySelectorAll('.card-container')].filter(e => e.hasAttribute('four-open'));
let fourCard = fourCardList[0];

oneCard.addEventListener('click', () => {
    const open = oneCard.getAttribute('one-open');

    if (open === 'false') {
        oneCard.setAttribute('one-open', true);
        twoCard.setAttribute('two-open', false);
        threeCard.setAttribute('three-open', false);
        fourCard.setAttribute('four-open', false);
    }
});

twoCard.addEventListener('click', () => {
    const open = twoCard.getAttribute('two-open');

    if (open === 'false') {
        twoCard.setAttribute('two-open', true);
        oneCard.setAttribute('one-open', false);
        threeCard.setAttribute('three-open', false);
        fourCard.setAttribute('four-open', false);
    }
});

threeCard.addEventListener('click', () => {
    const open = threeCard.getAttribute('three-open');

    if (open === 'false') {
        threeCard.setAttribute('three-open', true);
        oneCard.setAttribute('one-open', false);
        twoCard.setAttribute('two-open', false);
        fourCard.setAttribute('four-open', false);
    }
});

fourCard.addEventListener('click', () => {
    const open = fourCard.getAttribute('four-open');

    if (open === 'false') {
        fourCard.setAttribute('four-open', true);
        oneCard.setAttribute('one-open', false);
        twoCard.setAttribute('two-open', false);
        threeCard.setAttribute('three-open', false);
    }
});


// Blog h4 to h3 




