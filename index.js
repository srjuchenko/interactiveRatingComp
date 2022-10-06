"use strict";

let rateEl = document.querySelector(".rate");
const ratingBtnsEl = document.querySelectorAll(".rating-btn");
const submitBtnEl = document.querySelector(".submit-btn");
const ratingStateEl = document.querySelector(".rating-state");
const thankStateEl = document.querySelector(".thank-you-state");
let choosed = false;

ratingBtnsEl.forEach((btn) =>
  btn.addEventListener("mouseover", function (e) {
    if (btn.textContent !== rateEl.textContent) {
      btn.style.backgroundColor = "#7c8798";
    }
  })
);

ratingBtnsEl.forEach((btn) =>
  btn.addEventListener("mouseleave", function (e) {
    if (btn.textContent !== rateEl.textContent) {
      btn.style.backgroundColor = "#252d37";
    }
  })
);

ratingBtnsEl.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    choosed = true;
    rateEl.textContent = btn.textContent;

    ratingBtnsEl.forEach((b) => {
      b.style.backgroundColor = "#252d37";
      btn.style.backgroundColor = "#fb7413";
    });
  })
);

submitBtnEl.addEventListener("click", function (e) {
  if (choosed) {
    ratingStateEl.classList.add("hidden");
    thankStateEl.classList.remove("hidden");
  } else {
    alert("you need to rate before submitting!");
  }
});
