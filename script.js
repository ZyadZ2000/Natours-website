"use strict";

const rbtn = document.querySelectorAll(".form__radio--btn");
const navbtn = document.querySelector(".nav__btn");
rbtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const radio = btn.previousElementSibling;
    radio.checked = !radio.checked;
    console.log(radio.checked);
  });
});
navbtn.addEventListener("click", function (e) {
  navbtn.classList.toggle("nav__btn--checked");
  document
    .querySelector(".nav__background")
    .classList.toggle("nav__background--shown");
  document
    .querySelector(".nav__elements")
    .classList.toggle("nav__elements--shown");
});
