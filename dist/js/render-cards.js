const render = (arrCards, parentSelector) => {
    if (arrCards.length > 0 && parentSelector) {
        const parent = document.querySelector(parentSelector);

        if (parent) {
            parent.innerHTML = '';
            const wrapperContent = new DocumentFragment();
            arrCards.forEach((cardObj) => {
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

                const cardElement = document.createElement('li');
                cardElement.classList.add('list-gifts__item');
                cardElement.innerHTML = `
                    <div class="gift-card" data-name="${cardObj.name}">
                        <div class="gift-card__image">
                            <img src="./img/${srcImg}.png" alt="christmas tree toy">
                        </div>
                        <div class="gift-card__preview">
                            <p class="gift-card__title gift-card__title--tag-${colorText}">${cardObj.category}</p>
                            <p class="gift-card__description">${cardObj.name}</p>
                        </div>
                    </div>
                `;
                wrapperContent.append(cardElement);
            });
            parent.append(wrapperContent);
        }
    }
};

export default render;
