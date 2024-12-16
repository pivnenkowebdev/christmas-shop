import getData from './get-data.js';

const randomCards = async (count) => {
    const cards = await getData();

    if (!cards || count <= 0) return [];

    const selectedCards = [];
    for (let i = 0; i < count; i++) {
        const randomIndex = Math.floor(Math.random() * cards.length);
        selectedCards.push(cards[randomIndex]);
    }
    return selectedCards;
};

export default randomCards;
