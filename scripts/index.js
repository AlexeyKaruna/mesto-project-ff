// @todo: Темплейт карточки

// @todo: DOM узлы
const cardTemplate = document.querySelector("#card-template").content;
const placesList = document.querySelector(".places__list");
// @todo: Функция создания карточки

function createCard(data, deleteCallback) {
  const cardClone = cardTemplate.querySelector(".card").cloneNode(true);

  const imageElement = cardClone.querySelector(".card__image");
  const titleElement = cardClone.querySelector(".card__title");
  const deleteButton = cardClone.querySelector(".card__delete-button");

  imageElement.src = data.link;
  imageElement.alt = data.name;
  titleElement.textContent = data.name;

  deleteButton.addEventListener("click", () => {
    deleteCallback(cardClone);
  });

  return cardClone;
}

// @todo: Функция удаления карточки

function deleteCard(element) {
  element.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach((cardData, index) => {
  const cardElement = createCard({ ...cardData }, deleteCard);
  placesList.appendChild(cardElement);
});
