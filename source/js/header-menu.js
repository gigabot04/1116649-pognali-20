var menu = document.querySelector(".header-menu");
var line1 = document.querySelector(".page-header__line1");
var line2 = document.querySelector(".page-header__line2");
var btn = document.querySelector(".page-header__toggle");

if (menu.classList.contains("header-menu--active")) {
  line1.style.backgroundColor = "#cccccc";
  line2.style.backgroundColor = "#cccccc";
}

btn.addEventListener("click", function () {
  if (menu.classList.contains("header-menu--active")) {
    menu.classList.remove("header-menu--active");
    btn.classList.remove("page-header__toggle--close");
  } else {
    menu.classList.add("header-menu--active");
    btn.classList.add("page-header__toggle--close");
  }
})
