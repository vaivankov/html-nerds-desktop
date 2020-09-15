"use strict";

window.syncSliderValues = function (evt) {
	let _sliderThumb = this;
	let _sliderWrapper = _sliderThumb.closest(".price-slider");
	let _sliderTrack = _sliderWrapper.querySelector(".slider-track");

	if (+sliderPriceMin.value > +sliderPriceMax.value) {
		sliderPriceMin.value = +sliderPriceMax.value;
	}

	if (+inputPriceMin.value > +inputPriceMax.value) {
		inputPriceMin.value = +inputPriceMax.value;
	}

	_sliderTrack.style.setProperty(`--${_sliderThumb.id}`, +_sliderThumb.value);
};

sliderPriceMin.addEventListener("input", syncSliderValues);
sliderPriceMax.addEventListener("input", syncSliderValues);
inputPriceMin.addEventListener("input", syncSliderValues);
inputPriceMax.addEventListener("input", syncSliderValues);
