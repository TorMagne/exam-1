const btnHamburger = document.querySelector('#btnHamburger');
const openOverlay = document.querySelector('.overlay');
const fadeMenu = document.querySelector('.nav__links');

btnHamburger.addEventListener('click', function () {
  if (btnHamburger.classList.contains('open')) {
    // close
    btnHamburger.classList.remove('open');
    fadeMenu.classList.add('has-fade');
    openOverlay.classList.remove('fade-in');
    openOverlay.classList.add('fade-out');
  } else {
    // open
    btnHamburger.classList.add('open');
    fadeMenu.classList.remove('has-fade');
    openOverlay.classList.remove('fade-out');
    openOverlay.classList.add('fade-in');
  }
});
