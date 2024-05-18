function openModal(element) {
  element.classList.add("popup_is-opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeModal() {
  if (document.querySelector(".popup_is-opened")) {
    const openedModal = document.querySelector(".popup_is-opened");
    openedModal.classList.remove("popup_is-opened");
  }
  window.removeEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    closeModal();
  }
}

export { openModal, closeModal };
