function openModal(element) {
  element.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeModal(element) {
  element.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(element) {
  if (element.key === "Escape") {
    const openModalWindow = document.querySelector(".popup_is-opened");
    closeModal(openModalWindow);
  }
}

export { openModal, closeModal };
