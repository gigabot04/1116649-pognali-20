var formTextareaWrap = document.querySelectorAll(".form-setting__action-plan-wrap");
var formBtn = document.querySelector(".form-setting__next--step3");
var formTextarea = document.querySelectorAll(".form-setting__action-plan");
var formSpan = document.querySelectorAll(".form-setting__invalid");


for (let i = 0; i < formTextarea.length; i++) {
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
