const debounce = (func, delay) => {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
};

const createBtn = () => {
    const windowWidth = window.innerWidth;
    const isBtn = document.querySelector('#btnScroll');
    const currentScroll = window.scrollY;

    if (windowWidth <= 768 && !isBtn && currentScroll >= 300) {
        const btnScroll = document.createElement('button');
        btnScroll.addEventListener('click', () => {
            window.scrollTo(0, 0);
        });
        btnScroll.id = 'btnScroll';
        btnScroll.className = 'btn-scroll';
        document.body.append(btnScroll);
    } else if ((windowWidth > 768 || currentScroll < 300) && isBtn) {
        isBtn.remove();
    }
};

const handleResizeOrScroll = debounce(createBtn, 100);

window.addEventListener('resize', handleResizeOrScroll);
window.addEventListener('scroll', handleResizeOrScroll);

createBtn();
