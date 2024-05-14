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
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", likeCallback);
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCallback);
  cardImage.addEventListener("click", viewCallback);
  return cardElement;
}

function likeCard(evt) {
  evt.target.classList.toggle("card__like-button_is-active");
}

function deleteCard(evt) {
  evt.target.offsetParent.remove();
}

export { createCard, likeCard, deleteCard };
