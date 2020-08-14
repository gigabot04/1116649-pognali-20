var menu = document.querySelector(".rates-menu");
var btnClose = menu.querySelector(".rates-menu__btn");
var btnOpen = document.querySelector(".rates__button");

btnOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.add("rates-menu--active");
})

btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.remove("rates-menu--active");
})
