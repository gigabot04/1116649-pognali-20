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

var filterPart = document.querySelectorAll(".filter__part");
var filterBtn = document.querySelector(".filter__btn-up");
var filterBtnText1 = document.querySelector(".filter__btn-text-1");
var filterBtnText2 = document.querySelector(".filter__btn-text-2");
var filterParts = document.querySelector(".filter__parts");
var filterGrid = document.querySelector(".filter__grid");
var filterBtnDown = document.querySelector(".filter__btn-down");
var filterWord = document.querySelectorAll(".filter__word");
var filterWordWrap = document.querySelectorAll(".filter__word-wrap ");
var filterListCountry = document.querySelectorAll(".filter__countries-wrap");

for (var i = 0; i < filterPart.length; i++) {
  filterPart[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    var filterPartAct = document.querySelector(".filter__part--active");
    filterPartAct.classList.remove("filter__part--active");
    filterPart[i].classList.add("filter__part--active");
  })
}

filterBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (filterParts.classList.contains("filter__parts--active")) {
    filterParts.classList.remove("filter__parts--active");
    filterGrid.classList.remove("filter__grid--active");
    filterBtnDown.classList.remove("filter__btn-down--active");
  } else {
    filterParts.classList.add("filter__parts--active");
    filterGrid.classList.add("filter__grid--active");
    filterBtnDown.classList.add("filter__btn-down--active");
  }
})

filterBtnDown.addEventListener("click", function (evt) {
  evt.preventDefault();
  filterParts.classList.remove("filter__parts--active");
  filterGrid.classList.remove("filter__grid--active");
  filterBtnDown.classList.remove("filter__btn-down--active");
})

for (var i = 0; i < filterWord.length; i++) {
  filterWord[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    var filterWordAct = document.querySelector(".filter__word--active");
    var filterWordWrapAct = document.querySelector(".filter__word-wrap--active");
    var filterListAct = document.querySelector(".filter__countries-wrap--active");
    filterListAct.classList.remove("filter__countries-wrap--active");
    filterWordAct.classList.remove("filter__word--active");
    filterWordWrapAct.classList.remove("filter__word-wrap--active");
    filterWord[i].classList.add("filter__word--active");
    filterWordWrap[i].classList.add("filter__word-wrap--active")
    filterListCountry[i].classList.add("filter__countries-wrap--active");
  })
}

filterBtn.addEventListener("click", function () {
  var filterBtnAct = document.querySelector(".filter__btn-text-active");
  filterBtnAct.classList.remove("filter__btn-text-active");

  if (filterGrid.classList.contains("filter__grid--active")) {
    filterBtnText1.classList.add("filter__btn-text-active");
  } else {
    filterBtnText2.classList.add("filter__btn-text-active");
  }
})
