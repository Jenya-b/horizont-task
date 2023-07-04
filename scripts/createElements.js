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

export const createCard = (name, src, index) => {
  const item = document.createElement('li');
  item.classList.add('cards__item');
  item.id = `item-${index}`;

  const title = createTitle(name, 'cards__title');
  const imageBlock = createImage(src, 'cards__image');

  item.append(imageBlock, title);

  return item;
};

export const createModal = ({ title, desc, url }) => {
  const modalCard = document.body.querySelector('.modal__card');

  const nameMove = createTitle(title, 'modal-card__title');
  const imageBlock = createImage(url, 'modal-card__image');
  const description = createDesc(desc, 'modal-card__desc');

  modalCard.append(imageBlock, nameMove, description);
};
