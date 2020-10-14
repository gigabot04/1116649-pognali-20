var headerMenu = document.querySelector(".header-menu");
var line1 = document.querySelector(".page-header__line1");
var line2 = document.querySelector(".page-header__line2");
var headerBtn = document.querySelector(".page-header__toggle");
var headerTitle = document.querySelector(".header-menu__title");
var headerAuth = document.querySelector(".header-menu__auth");
var headerFeedback = document.querySelector(".header-menu__feedback");
var headerSocial = document.querySelector(".header-menu__social-contacts");
var headerFix = document.querySelector(".page-header__fix-js");
var headerLogo = document.querySelectorAll(".main-logo");
var headerWrap = document.querySelector(".page-header__wrap");
var headerLink = document.querySelectorAll(".header-menu-desktop__link");
var headerLinkWrap = document.querySelector(".header-menu-desktop");
var headerBody = document.querySelector("body");

headerMenu.classList.remove("header-menu--jsnone");
headerBtn.classList.remove("page-header__toggle--nojs");

headerBtn.addEventListener("click", function () {
  if (headerMenu.classList.contains("header-menu--active")) {
    headerMenu.classList.remove("header-menu--active");
    headerBtn.classList.remove("page-header__toggle--close");
    headerBody.style.overflow = "visible";
  } else {
    headerMenu.classList.add("header-menu--active");
    headerBtn.classList.add("page-header__toggle--close");
    headerBody.style.overflow = "hidden";
  }

  if (headerMenu.classList.contains("header-menu--active") || headerFix.classList.contains("page-header__fix")) {
    line1.style.backgroundColor = "#ccc";
    line2.style.backgroundColor = "#ccc";
    headerLogo[1].classList.add("main-logo__header-add--up");
    headerLogo[0].classList.remove("main-logo__header-add--up");
  } else {
    line1.style.backgroundColor = "#fff";
    line2.style.backgroundColor = "#fff";
    headerLogo[0].classList.add("main-logo__header-add--up");
    headerLogo[1].classList.remove("main-logo__header-add--up");
  }
})

window.addEventListener("scroll", function () {
  var pagePx = window.pageYOffset;

  if (pagePx > 500) {
    headerFix.classList.add("page-header__fix");
    headerLogo[1].classList.add("main-logo__header-add--up");
    headerLogo[0].classList.remove("main-logo__header-add--up");
    line1.style.backgroundColor = "#ccc";
    line2.style.backgroundColor = "#ccc";
    headerWrap.classList.add("page-header__wrap--paddingNone");
    headerLinkWrap.classList.add("header-menu-desktop--blue");

    for (var i = 0; i < headerLink.length; i++) {
      headerLink[i].classList.add("header-menu-desktop__link--blue");
    }
  } else {
    headerFix.classList.remove("page-header__fix");
    headerLogo[0].classList.add("main-logo__header-add--up");
    headerLogo[1].classList.remove("main-logo__header-add--up");
    line1.style.backgroundColor = "#fff";
    line2.style.backgroundColor = "#fff";
    headerWrap.classList.remove("page-header__wrap--paddingNone");
    headerLinkWrap.classList.remove("header-menu-desktop--blue");

    for (var i = 0; i < headerLink.length; i++) {
      headerLink[i].classList.remove("header-menu-desktop__link--blue");
    }

    if (headerMenu.classList.contains("header-menu--active")) {
      line1.style.backgroundColor = "#ccc";
      line2.style.backgroundColor = "#ccc";
      headerLogo[1].classList.add("main-logo__header-add--up");
      headerLogo[0].classList.remove("main-logo__header-add--up");
    } else {
      line1.style.backgroundColor = "#fff";
      line2.style.backgroundColor = "#fff";
      headerLogo[0].classList.add("main-logo__header-add--up");
      headerLogo[1].classList.remove("main-logo__header-add--up");
    }
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
