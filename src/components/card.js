// @todo: Функция создания карточки
function createCard(
  cardContent,
  cardTemplate,
  deleteCallback,
  likeCallback,
  viewCallback
) {
  const cardElement = cardTemplate.content
    .querySelector(".places__item")
    .cloneNode(true);
  cardElement.querySelector(".card__title").textContent = cardContent.name;

  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = cardContent.link;
  cardImage.alt = cardContent.name;

  cardImage.addEventListener("click", () =>
    viewCallback(cardContent.link, cardContent.name)
  );

  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", likeCallback);
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCallback);

  return cardElement;
}

// Функция отметки нравится
function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

// @todo: Функция удаления карточки
function deleteCard(evt) {
  evt.target.closest(".card").remove();
}

export { createCard, likeCard, deleteCard };
