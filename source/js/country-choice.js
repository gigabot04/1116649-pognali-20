var country = document.querySelector(".form-setting__choice-countries");
var btnOpen = country.querySelector(".form-setting__choice-text");
var btnDel = country.querySelector(".form-setting__del");
var listCountry = country.querySelector(".form-setting__chice-countries-wrap");
var letter = country.querySelectorAll(".form-setting__letter");

btnOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (btnOpen.classList.contains("form-setting__choice-text--active")) {
    btnOpen.classList.remove("form-setting__choice-text--active");
    btnDel.classList.remove("form-setting__del--disabled");
    listCountry.classList.remove("form-setting__chice-countries-wrap--active");
  } else {
    btnOpen.classList.add("form-setting__choice-text--active");
    btnDel.classList.add("form-setting__del--disabled");
    listCountry.classList.add("form-setting__chice-countries-wrap--active");
  }
})

for (let i = 0; i < letter.length; i++) {
  letter[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    let letterActive = country.querySelector(".form-setting__letter--active");
    letterActive.classList.remove("form-setting__letter--active");
    letter[i].classList.add("form-setting__letter--active");
  });
}
