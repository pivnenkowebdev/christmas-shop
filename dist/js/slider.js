const slider = document.querySelector('#carousel');
const carouselList = slider.querySelector('#carouselList');

const currentWidthSlider = 1993;
let currentWidthWindow = window.innerWidth;
let countOfClick = currentWidthWindow < 769 ? 6 : 3;
let moveWidth = (currentWidthSlider - carouselList.offsetWidth) / countOfClick;
let counterSlide = 0;

const arrowStyle = (currentSlide) => {
    const arrowLeft = slider.querySelector('[data-arrow="left"]');
    const arrowRight = slider.querySelector('[data-arrow="right"]');

    if (currentSlide === countOfClick) {
        arrowRight.classList.add('inactive');
    } else if (currentSlide < countOfClick) {
        arrowRight.classList.remove('inactive');
    }

    if (currentSlide > 0) {
        arrowLeft.classList.remove('inactive');
    } else {
        arrowLeft.classList.add('inactive');
    }
};

const motion = () => {
    carouselList.style.transform = `translateX(-${moveWidth * counterSlide}px)`;
};

const handlerControllElements = (e) => {
    const isRightArrow = e.target.closest('[data-arrow="right"]');
    const isLeftArrow = e.target.closest('[data-arrow="left"]');

    if (isRightArrow) {
        choiceOfDirection('right');
    } else if (isLeftArrow) {
        choiceOfDirection('left');
    }

    motion(counterSlide);
    arrowStyle(counterSlide);
};

const choiceOfDirection = (direction) => {
    if (direction === 'right') {
        if (counterSlide < countOfClick) {
            counterSlide++;
        }
    } else if (direction === 'left') {
        if (counterSlide > 0) {
            counterSlide--;
        }
    }
};

const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

const handlerResize = debounce(() => {
    currentWidthWindow = window.innerWidth;
    countOfClick = currentWidthWindow < 769 ? 6 : 3;
    moveWidth = (currentWidthSlider - carouselList.offsetWidth) / countOfClick;
    counterSlide = 0;
    motion();
    arrowStyle(counterSlide);
}, 100);

window.addEventListener('resize', handlerResize);
slider.addEventListener('click', handlerControllElements);
