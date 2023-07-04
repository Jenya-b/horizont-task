import { cardInfo } from './constants.js';

const cardList = document.body.querySelector('.content__list');

const createImage = (src) => {
  const imageWrap = document.createElement('div');
  imageWrap.classList.add('cards__image');
  const img = new Image();
  img.src = src;
  imageWrap.append(img);

  return imageWrap;
};

const createTitle = (name) => {
  const title = document.createElement('h2');
  title.classList.add('cards__title');
  title.textContent = name;

  return title;
};

const createCard = (name, src, index) => {
  const item = document.createElement('li');
  item.classList.add('cards__item');
  item.id = `item-${index}`;

  const title = createTitle(name);
  const imageBlock = createImage(src);

  item.append(imageBlock, title);

  return item;
};

const addCardsOnPage = () => {
  for (let i = 0; i < cardInfo.length; i++) {
    const { title, url } = cardInfo[i];
    cardList.append(createCard(title, url, i));
  }
};

addCardsOnPage();
