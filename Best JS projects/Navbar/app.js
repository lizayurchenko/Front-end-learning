const btnShowLinks = document.querySelector(".fas");
const menu = document.querySelector(".links");

btnShowLinks.addEventListener("click", function () {
  menu.classList.toggle("show-links");
});
