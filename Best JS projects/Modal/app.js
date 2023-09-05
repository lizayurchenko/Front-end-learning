const btnOpenModal = document.querySelector(".modal-btn");
const btnCloseModal = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");

btnOpenModal.addEventListener("click", function () {
  modal.classList.add("open-modal");
});

btnCloseModal.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
