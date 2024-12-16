const headerElement = document.querySelector('#header');
const body = document.body;
const mobileMenu = headerElement.querySelector('#menu');
const burgerBtn = headerElement.querySelector('#burger');

const menuAction = (e) => {
    const isBurgerBtn = e.target.closest('#burger');
    const isAnchorLink = e.target.closest('[data-anchor]');

    if (isBurgerBtn || isAnchorLink) {
        body.classList.toggle('active');
        mobileMenu.classList.toggle('open');
        burgerBtn.classList.toggle('open');
    }
};

const removeModal = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 768) {
        body.classList.remove('active');
        mobileMenu.classList.remove('open');
        burgerBtn.classList.remove('open');
    }
};

const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), delay);
    };
};

headerElement.addEventListener('click', menuAction);
window.addEventListener('resize', debounce(removeModal, 50));
