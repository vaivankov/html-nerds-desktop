'use strict';

(function () {
  window.syncMaxInputNMaxSlider = function () {
    sliderPriceMax.value = inputPriceMax.value;
    syncSliderValues.call(sliderPriceMax, sliderPriceMax);
  }
})();

inputPriceMax.addEventListener("input", syncMaxInputNMaxSlider);