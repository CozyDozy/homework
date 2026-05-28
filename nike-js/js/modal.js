
const modalButton = document.querySelector(".product__buy-button")
const modal = document.querySelector(".modal")
const modalWindow = document.querySelector(".modal__window")

//modal__window--open

modalButton.addEventListener('click', openModal)
modal.addEventListener('click', closeModal)


function openModal() {
  modal.classList.toggle("modal--open")
  modalWindow.classList.toggle("modal__window--open")
}

function closeModal(e) {
  const target = e.target
  if (target.closest(".modal__close") || target.classList.contains("modal")) {
    modal.classList.remove("modal--open")
    modalWindow.classList.remove("modal__window--open")
  }
}
