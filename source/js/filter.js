var filter = document.querySelector(".filter__wrap");
var filterParts = filter.querySelector(".filter__parts");
var filterPart = filter.querySelectorAll(".filter__part");
var filterAlphabet = filter.querySelector(".filter__alphabet");
var filterStates = filter.querySelectorAll(".filter__states");
var filterBtn = filter.querySelector(".filter__close-btn");
var filterBtnAlph = filter.querySelectorAll(".filter__letter");
var filterWrap = filter.querySelectorAll(".filter__states-wrap");

filterBtn.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (filter.classList.contains("filter--active")) {
    filter.classList.remove("filter--active");
    filterParts.classList.remove("filter__parts--active");
    filterAlphabet.classList.remove("filter__alphabet--active");
  } else {
    filter.classList.add("filter--active");
    filterParts.classList.add("filter__parts--active");
    filterAlphabet.classList.add("filter__alphabet--active");
  }
});


for (let i = 0; i < filterPart.length; i++) {
  filterPart[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    let filterPartAct = filter.querySelector(".filter__part--active");
    filterPartAct.classList.remove("filter__part--active");
    filterPart[i].classList.add("filter__part--active");
  });
}


for (let j = 0; j < filterBtnAlph.length; j++) {
  filterBtnAlph[j].addEventListener("click", function (evt) {
    evt.preventDefault();

    let filterBtnActive = filter.querySelector(".filter__letter--active");
    filterBtnActive.classList.remove("filter__letter--active");

    filterBtnAlph[j].classList.add("filter__letter--active");

    let filterWrapActive = filter.querySelector(".filter__states-wrap--active");
    filterWrapActive.classList.remove("filter__states-wrap--active");

    filterWrap[j].classList.add("filter__states-wrap--active");
  })
}



