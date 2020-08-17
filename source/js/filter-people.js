var filterPeopleBtn = document.querySelectorAll(".filter-people__btn");
var filterPeopleList = document.querySelectorAll(".filter-people__wrap");

for (let i = 0; i < filterPeopleBtn.length; i++) {
  filterPeopleBtn[i].addEventListener("click", function (evt) {
    evt.preventDefault();
    if (filterPeopleBtn[i].classList.contains("filter-people__btn--active")) {
      filterPeopleBtn[i].classList.remove("filter-people__btn--active");
      filterPeopleList[i].classList.remove("filter-people__wrap--active")
    } else {
      filterPeopleBtn[i].classList.add("filter-people__btn--active");
      filterPeopleList[i].classList.add("filter-people__wrap--active")
    }
  })
}
