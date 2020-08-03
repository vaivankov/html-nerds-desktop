'use strict';

(function () {
  window.syncMinInputNMinSlider = function () {
    sliderPriceMin.value = inputPriceMin.value;
    syncSliderValues.call(sliderPriceMin, sliderPriceMin);
  }
})();

inputPriceMin.addEventListener("input", syncMinInputNMinSlider);