import { cardInfo } from './constants.js';
import { createCard, createModal } from './createElements.js';

const cardList = document.body.querySelector('.content__list');
const modal = document.body.querySelector('.modal');
const select = document.body.querySelector('.content__select');

cardInfo.sort((a, b) => (a.title > b.title ? 1 : -1));

const addCardsOnPage = (cardInfo) => {
  cardList.querySelectorAll('.cards__item').forEach((elem) => elem.remove());

  for (let i = 0; i < cardInfo.length; i++) {
    const { title, url } = cardInfo[i];
    cardList.append(createCard(title, url, i));
  }
};

const openCard = (event) => {
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
};

const closeModal = () => {
  const modalCard = document.body.querySelector('.modal__card');
  modal.classList.remove('active');
  modalCard.querySelector('.modal-card__title').remove();
  modalCard.querySelector('.modal-card__image').remove();
  modalCard.querySelector('.modal-card__desc').remove();
};

const sortByName = (event) => {
  if (event.target.value === 'az') {
    cardInfo.sort((a, b) => (a.title > b.title ? 1 : -1));
  } else {
    cardInfo.sort((a, b) => (a.title > b.title ? -1 : 1));
  }
  addCardsOnPage(cardInfo);
};

addCardsOnPage(cardInfo);

cardList.addEventListener('click', openCard);

modal.querySelector('.modal-card__close').addEventListener('click', closeModal);

select.addEventListener('change', sortByName);
