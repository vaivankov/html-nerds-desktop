'use strict';

(function () {
  window.changeSlide = function () {
    sliderImage.src = this.dataset.url;
    sloganExplanation.innerHTML = this.dataset.sloganExplanation;
    slogan.innerHTML = this.dataset.slogan;
  }
}
)();

for (let i of sliderRadioAll) {
  i.addEventListener("click", changeSlide)
}