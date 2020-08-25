var headerMenu = document.querySelector(".header-menu");
var line1 = document.querySelector(".page-header__line1");
var line2 = document.querySelector(".page-header__line2");
var headerBtn = document.querySelector(".page-header__toggle");

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
  } else {
    headerMenu.classList.add("header-menu--active");
    headerBtn.classList.add("page-header__toggle--close");
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