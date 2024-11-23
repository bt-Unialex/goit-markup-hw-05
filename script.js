const modalBtnOpen = document.querySelector(".js-open-modal");
const modalBtnClose = document.querySelector(".js-close-modal");
const modalWindow = document.querySelector(".js-modal");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

function toggleModal() {
  modalWindow.classList.toggle("is-open");
}
