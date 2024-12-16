import getData from './get-data.js';
import render from './render-cards.js';

const choiceCards = (menuSelector, parentSelector) => {
    const menu = document.querySelector(menuSelector);
    if (!menu) return;

    menu.addEventListener('click', async (e) => {
        const isBtn = e.target.closest('[data-choice]');
        if (!isBtn) return;

        menu.querySelector('.active')?.classList.remove('active');
        isBtn.classList.add('active');

        const category = isBtn.dataset.choice.replace('-', ' ');
        const cards = await getData();
        const filteredCards =
            category !== 'all'
                ? cards.filter((card) => card.category === category)
                : cards.sort(() => Math.random() - 0.5);

        render(filteredCards, parentSelector);
    });
};

const init = async (menuSelector, parentSelector) => {
    const cards = await getData();
    render(
        cards.sort(() => Math.random() - 0.5),
        parentSelector
    );
    choiceCards(menuSelector, parentSelector);
};

init('#menuChoice', '#listGifts');
