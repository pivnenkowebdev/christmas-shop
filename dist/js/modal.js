import getData from './get-data.js';

const body = document.body;
const selectorParent = '#listGifts';
const list = document.querySelector(selectorParent);

const cardEventHandler = async (e) => {
    const isCard = e.target.closest('[data-name]');
    if (!isCard) return;
    const cardName = isCard.dataset.name;

    const cards = await getData();
    if (!cards) return;

    const currentCardData = cards.filter((card) => {
        if (card.name.toLowerCase() === cardName.toLowerCase()) {
            return card;
        }
    });
    if (!cardEventHandler) return;
    renderModal(...currentCardData);
};

const removeModal = (e) => {
    const isCloseBtn = e.target.closest('[data-close]');
    const isFade = e.target.closest('#fadeBlock');

    if (isCloseBtn || isFade) {
        const modal = document.querySelector('[data-modal]');
        const fade = document.querySelector('#fadeBlock');

        modal.remove();
        fade.remove();

        window.removeEventListener('click', removeModal);
        body.classList.remove('active');
    }
};

const renderModal = (cardObj) => {
    const fadeBlockElement = document.createElement('div');
    fadeBlockElement.className = 'fade';
    fadeBlockElement.id = 'fadeBlock';

    let colorText = null;
    let srcImg = null;

    switch (cardObj.category) {
        case 'for work':
            colorText = 'purple';
            srcImg = 'gift-for-work';
            break;
        case 'for health':
            colorText = 'green';
            srcImg = 'gift-for-health';
            break;
        case 'for harmony':
            colorText = 'pink';
            srcImg = 'gift-for-harmony';
            break;
    }

    const renderPoints = (points) => {
        const countPoints = 5;

        const wrapperPoints = document.createElement('div');
        wrapperPoints.className = 'achievement-list__points';

        const countActivatedPoints = points[1];

        for (let i = 0; i < countPoints; i++) {
            const pointWrapper = document.createElement('span');
            pointWrapper.className = 'achievement-list__icon-wrapper';

            const svg = `
            <svg class="snowflake-icon" viewBox="0 0 24 24" width="24" height="24">
                <use href="./img/icons/sprites.svg#snowflake"></use>
            </svg>
            `;

            pointWrapper.insertAdjacentHTML('beforeend', svg);

            if (i >= countActivatedPoints) {
                pointWrapper.style.opacity = '0.1';
            }

            wrapperPoints.appendChild(pointWrapper);
        }

        return wrapperPoints.outerHTML;
    };

    const renderItems = (itemsObj) => {
        const listAchievement = document.createElement('ul');
        listAchievement.className = 'achievement-list';

        for (const key in itemsObj) {
            const item = `
            <li class="achievement-list__item">
                <div class="achievement-list__indicators">
                    <span class="achievement-list__achievement-title">${key}</span>
                    <span class="achievement-list__point">${itemsObj[key]}</span>
                </div>
                <div class="achievement-list__points">
                    ${renderPoints(itemsObj[key])}
                </div>
            </li>`;
            listAchievement.insertAdjacentHTML('beforeend', item);
        }
        return listAchievement.outerHTML;
    };

    const cardModalElement = `
        <div class="gift-card gift-card--modal" data-modal>
            <button class="close" data-close></button>
            <div class="gift-card__image gift-card__image--modal">
                <img src="./img/${srcImg}.png" alt="christmas tree toy">
            </div>
            <div class="gift-card__preview gift-card__preview--modal">
                <p class="gift-card__title gift-card__title--tag-${colorText}">${cardObj.category}</p>
                <p class="gift-card__description gift-card__description--modal">${cardObj.name}</p>
                <p class="gift-card__text gift-card__text--modal">${cardObj.description}</p>
                <div class="gift-card__achievement">
                    <p class="gift-card__small-title">Adds superpowers to:</p>
                    ${renderItems(cardObj.superpowers)}
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentElement('beforeEnd', fadeBlockElement);
    document.body.insertAdjacentHTML('beforeEnd', cardModalElement);
    body.classList.add('active');

    window.addEventListener('click', removeModal);
};

list.addEventListener('click', cardEventHandler);
