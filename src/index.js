import "./index.css";
import { initialCards } from "./components/initialCards.js";
import { createCard, likeCard, deleteCard } from "./components/card.js";
import { closeModal, openModal } from "./components/modal.js";
import avatarImage from "../images/main-avatar.jpg";

// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template");

// @todo: DOM узлы
const placesList = document.querySelector(".places__list");
const profileTitle = document.querySelector(".profile__title");
const profileImage = document.querySelector(".profile__image");
const profileDescription = document.querySelector(".profile__description");
const formEditProfile = document.forms.editProfile;
const nameProfile = formEditProfile.elements.name;
const professionProfile = formEditProfile.elements.description;
const profilePopupOpener = document.querySelector(".profile__edit-button");
const popupFormProfile = document.querySelector(".popup_type_edit");
const cardPopupOpener = document.querySelector(".profile__add-button");
const popupFormCard = document.querySelector(".popup_type_new-card");
const formNewPlace = document.forms.newPlace;
const placeName = formNewPlace.elements.placeName;
const placeLink = formNewPlace.elements.link;
const popupViewImage = document.querySelector(".popup_type_image");
const popupImage = document.querySelector(".popup__image");
const captionImage = document.querySelector(".popup__caption");
const buttonClosePopupList = document.querySelectorAll(".popup__close");

// @todo: Вывести карточки на страницу
initialCards.forEach((element) => {
  placesList.append(
    createCard(element, cardTemplate, deleteCard, likeCard, viewImage)
  );
});

//Изменение атрибута style для смены аватара
profileImage.setAttribute("style", `background-image: URL(${avatarImage})`);

// Добавление класса анимации на модальные окна
document.querySelectorAll(".popup").forEach((element) => {
  element.classList.add("popup_is-animated");
});

// Обработчик события кнопки редактировать профиль
profilePopupOpener.addEventListener("click", () => {
  nameProfile.value = profileTitle.textContent;
  professionProfile.value = profileDescription.textContent;
  openModal(popupFormProfile);
});

// Обработчик события кнопки добавления нового места
cardPopupOpener.addEventListener("click", () => openModal(popupFormCard));

// Функция просмотра изображения карточки
function viewImage(cardLink, cardName) {
  popupImage.src = cardLink;
  popupImage.alt = cardName;
  captionImage.textContent = cardName;
  openModal(popupViewImage);
}

// Обработчик события закрытия модального окна по оверлею
[popupFormProfile, popupFormCard, popupViewImage].forEach((element) => {
  element.addEventListener("click", (evt) => {
    if (evt.currentTarget === evt.target) {
      closeModal(evt.target);
    }
  });
});

// Обработчик события закрытия модального окна по крестику

buttonClosePopupList.forEach((element) => {
  const openModalWindow = document.querySelector(".popup_is-opened");
  element.addEventListener("click", () => {
    closeModal(openModalWindow);
  });
});

// Функция редактирования профиля
function editUserProfile(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameProfile.value;
  profileDescription.textContent = professionProfile.value;
  closeModal(popupFormProfile);
}

// Функция добавления новой карточки
function addCard(evt) {
  evt.preventDefault();
  const newCard = {
    name: placeName.value,
    link: placeLink.value,
  };
  placesList.prepend(
    createCard(newCard, cardTemplate, deleteCard, likeCard, viewImage)
  );
  formNewPlace.reset();
  closeModal(popupFormCard);
}

// Обработчик события на изменение профиля
formEditProfile.addEventListener("submit", editUserProfile);

// Обработчик события на добавление карточки
formNewPlace.addEventListener("submit", addCard);
