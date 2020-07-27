'use strict';

(function () {
  window.closeModal = function (evt) {
    if (evt.keyCode === 27) {
      let modal = undefined;
      try {
        modal = document.querySelector('.show')
        modal.classList.remove('show');
      } catch (err) {
        return;
      }
    }
  }
}
)();

document.addEventListener("keydown", closeModal);