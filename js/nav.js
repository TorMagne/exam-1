const btnHamburger = document.querySelector('#btnHamburger');
const openOverlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function () {
  if (btnHamburger.classList.contains('open')) {
    btnHamburger.classList.remove('open');
    openOverlay.classList.remove('open--overlay');
  } else {
    btnHamburger.classList.add('open');
    openOverlay.classList.add('open--overlay');
  }
});
