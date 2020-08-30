var headerMenu = document.querySelector(".header-menu");
var line1 = document.querySelector(".page-header__line1");
var line2 = document.querySelector(".page-header__line2");
var headerBtn = document.querySelector(".page-header__toggle");
var headerTitle = document.querySelector(".header-menu__title");
var headerAuth = document.querySelector(".header-menu__auth");
var headerFeedback = document.querySelector(".header-menu__feedback");
var headerSocial = document.querySelector(".header-menu__social-contacts");
var headerFix = document.querySelector(".page-header__fix--js");
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

var formCountry = document.querySelector(".form-setting__choice-countries");
var formBtnOpen = formCountry.querySelector(".form-setting__choice-text");
var formBtnDel = formCountry.querySelector(".form-setting__del");
var formListCountry = formCountry.querySelector(".form-setting__chice-countries-wrap");
var formLetter = formCountry.querySelectorAll(".form-setting__letter");

formBtnOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (formBtnOpen.classList.contains("form-setting__choice-text--active")) {
    formBtnOpen.classList.remove("form-setting__choice-text--active");
    formBtnDel.classList.remove("form-setting__del--disabled");
    formListCountry.classList.remove("form-setting__chice-countries-wrap--active");
  } else {
    formBtnOpen.classList.add("form-setting__choice-text--active");
    formBtnDel.classList.add("form-setting__del--disabled");
    formListCountry.classList.add("form-setting__chice-countries-wrap--active");
  }
})

for (var i = 0; i < formLetter.length; i++) {
  formLetter[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    var letterActive = formCountry.querySelector(".form-setting__letter--active");
    letterActive.classList.remove("form-setting__letter--active");
    formLetter[i].classList.add("form-setting__letter--active");
  });
}

var formTextareaWrap = document.querySelectorAll(".form-setting__action-plan-wrap");
var formBtn = document.querySelector(".form-setting__next--step3");
var formTextarea = document.querySelectorAll(".form-setting__action-plan");
var formSpan = document.querySelectorAll(".form-setting__invalid");

for (var i = 0; i < formTextarea.length; i++) {
  formBtn.addEventListener("click", function (evt) {
    formSpan[i].classList.remove("form-setting__invalid--active");
    formTextareaWrap[i].classList.remove("form-setting__action-plan-wrap--invalid");
    if ( !formTextarea[i].value ) {
      evt.preventDefault();
      formSpan[i].classList.add("form-setting__invalid--active");
      formTextareaWrap[i].classList.add("form-setting__action-plan-wrap--invalid");
      if (formTextareaWrap[i].classList.contains("form-setting__action-plan-wrap--invalid")) {
        formTextareaWrap[i].classList.remove("form-setting__animate-shake");
        formTextareaWrap[i].offsetWidth = formTextareaWrap[i].offsetWidth;
        formTextareaWrap[i].classList.add("form-setting__animate-shake");
      }
    }
  })
}
