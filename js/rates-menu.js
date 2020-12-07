var ratesMenu = document.querySelector(".rates-menu");
var ratesBtnClose = ratesMenu.querySelector(".rates-menu__btn");
var ratesBtnOpen = document.querySelector(".rates__button");

ratesBtnOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  ratesMenu.classList.add("rates-menu--active");
})

ratesBtnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  ratesMenu.classList.remove("rates-menu--active");
})
