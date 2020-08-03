'use strict';

(function () {
  window.syncMinPriceSliderNMinPriceInput = function () {
    inputPriceMin.value = sliderPriceMin.value;
  }
})();

sliderPriceMin.addEventListener("input", syncMinPriceSliderNMinPriceInput);