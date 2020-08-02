'use strict';

(function () {
  window.syncSliderValues = function (evt) {
    let _sliderThumb = evt.target;
    let _sliderWrapper = _sliderThumb.closest(".price-slider");
    let _sliderTrack = _sliderWrapper.querySelector(".slider-track");

    if (+sliderMin.value > +sliderMax.value) {
      sliderMin.value = +sliderMax.value;
      return;
    }

    _sliderTrack.style.setProperty(`--${_sliderThumb.id}`, +_sliderThumb.value);

  }
})();

sliderMin.addEventListener("input", syncSliderValues);
sliderMax.addEventListener("input", syncSliderValues);