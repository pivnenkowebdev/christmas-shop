import randomCards from './random-cards.js';
import render from './render-cards.js';

const parentSelector = '#listGifts';
const countCards = 4;

const init = async () => {
    const cards = await randomCards(countCards);
    render(cards, parentSelector);
};

init();
