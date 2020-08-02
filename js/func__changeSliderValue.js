'use strict';

(function () {
  window.changeSliderValue = function (evt) {
    let _sliderThumb = evt.target;
    let _sliderWrapper = _sliderThumb.closest(".price-slider");
    let _sliderTrack = _sliderWrapper.querySelector(".slider-track");
    _sliderTrack.style.setProperty(`--${_sliderThumb.id}`, +_sliderThumb.value);
  }
}
)();

for (let s of sliderThumbs) {
  // s.addEventListener("input", changeSliderValue);
}