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
