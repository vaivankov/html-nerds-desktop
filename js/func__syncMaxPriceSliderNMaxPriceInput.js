"use strict";

window.syncMaxPriceSliderNMaxPriceInput = function () {
	inputPriceMax.value = sliderPriceMax.value;
};

sliderPriceMax.addEventListener("input", syncMaxPriceSliderNMaxPriceInput);
