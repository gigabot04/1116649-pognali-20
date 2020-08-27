var headerMenu = document.querySelector(".header-menu");
var line1 = document.querySelector(".page-header__line1");
var line2 = document.querySelector(".page-header__line2");
var headerBtn = document.querySelector(".page-header__toggle");
var headerTitle = document.querySelector(".header-menu__title");
var headerAuth = document.querySelector(".header-menu__auth");
var headerFeedback = document.querySelector(".header-menu__feedback");
var headerSocial = document.querySelector(".header-menu__social-contacts");

headerMenu.classList.remove("header-menu--jsnone");
headerBtn.classList.remove("page-header__toggle--nojs");

if (headerMenu.classList.contains("header-menu--active")) {
  line1.style.backgroundColor = "#cccccc";
  line2.style.backgroundColor = "#cccccc";
}

headerBtn.addEventListener("click", function () {
  if (headerMenu.classList.contains("header-menu--active")) {
    headerMenu.classList.remove("header-menu--active");
    headerBtn.classList.remove("page-header__toggle--close");
    headerTitle.classList.add("header-menu__title--none");
    headerAuth.classList.add("header-menu__auth--none");
    headerFeedback.classList.add("header-menu__feedback--none");
    headerSocial.classList.add("header-menu__social-contacts--none");
  } else {
    headerMenu.classList.add("header-menu--active");
    headerBtn.classList.add("page-header__toggle--close");
    headerTitle.classList.remove("header-menu__title--none");
    headerAuth.classList.remove("header-menu__auth--none");
    headerFeedback.classList.remove("header-menu__feedback--none");
    headerSocial.classList.remove("header-menu__social-contacts--none");
  }
})

window.addEventListener("scroll", function () {
  var pagePx = window.pageYOffset;

  if (pagePx > 500) {
    headerBtn.classList.add("page-header__toggle--fixed");
    headerMenu.classList.add("header-menu--scrollMenu");
  } else {
    headerBtn.classList.remove("page-header__toggle--fixed");
    headerMenu.classList.remove("header-menu--scrollMenu");
  }
})


var authBtn = document.querySelector(".auth__btn");
var authControl = document.querySelector(".auth__control");
var authWrap = document.querySelector(".auth__grid");


authBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if ( !authControl.value ) {
    authControl.classList.add("auth__control--invalid");
    authControl.placeholder = "Введите e-mail";
    authWrap.classList.remove("auth__control-shake");
    authControl.offsetWidth = authControl.offsetWidth;
    authWrap.classList.add("auth__control-shake");
  }
})

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
