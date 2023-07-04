import { cardInfo } from './constants.js';

const cardList = document.body.querySelector('.content__list');
const modal = document.body.querySelector('.modal');
const modalCard = document.body.querySelector('.modal__card');

const createImage = (src, className) => {
  const imageWrap = document.createElement('div');
  imageWrap.classList.add(className);
  const img = new Image();
  img.src = src;
  imageWrap.append(img);

  return imageWrap;
};

const createTitle = (name, className) => {
  const title = document.createElement('h2');
  title.classList.add(className);
  title.textContent = name;

  return title;
};

const createDesc = (desc, className) => {
  const description = document.createElement('p');
  description.classList.add(className);
  description.textContent = desc;

  return description;
};

const createCard = (name, src, index) => {
  const item = document.createElement('li');
  item.classList.add('cards__item');
  item.id = `item-${index}`;

  const title = createTitle(name, 'cards__title');
  const imageBlock = createImage(src, 'cards__image');

  item.append(imageBlock, title);

  return item;
};

const createModal = ({ title, desc, url }) => {
  const nameMove = createTitle(title, 'modal-card__title');
  const imageBlock = createImage(url, 'modal-card__image');
  const description = createDesc(desc, 'modal-card__desc');

  modalCard.append(imageBlock, nameMove, description);
};

const addCardsOnPage = () => {
  for (let i = 0; i < cardInfo.length; i++) {
    const { title, url } = cardInfo[i];
    cardList.append(createCard(title, url, i));
  }
};

addCardsOnPage();

cardList.addEventListener('click', (event) => {
  let { target, currentTarget } = event;

  while (target != currentTarget) {
    if (target.nodeName == 'LI') {
      const num = target.id.split('-')[1];
      createModal(cardInfo[num]);
      modal.classList.add('active');
      return;
    }
    target = target.parentNode;
  }
});

const closeModal = () => {
  modal.classList.remove('active');
  modalCard.querySelector('.modal-card__title').remove();
  modalCard.querySelector('.modal-card__image').remove();
  modalCard.querySelector('.modal-card__desc').remove();
};

modal.querySelector('.modal-card__close').addEventListener('click', closeModal);
