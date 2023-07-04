import { cardInfo } from './constants.js';

const cardList = document.body.querySelector('.content__list');

const createCard = (name, src, index) => {
  const item = document.createElement('li');
  item.classList.add('cards__item');
  item.id = `item-${index}`;

  const title = document.createElement('h2');
  title.classList.add('cards__title');
  title.textContent = name;

  const imageWrap = document.createElement('div');
  imageWrap.classList.add('cards__image');
  const img = new Image();
  img.src = src;
  imageWrap.append(img);

  item.append(imageWrap, title);

  return item;
};

const addCardsOnPage = () => {
  for (let i = 0; i < cardInfo.length; i++) {
    const { title, url } = cardInfo[i];
    cardList.append(createCard(title, url, i));
  }
};

addCardsOnPage();
