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

for (let i = 0; i < formLetter.length; i++) {
  formLetter[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    let letterActive = formCountry.querySelector(".form-setting__letter--active");
    letterActive.classList.remove("form-setting__letter--active");
    formLetter[i].classList.add("form-setting__letter--active");
  });
}
