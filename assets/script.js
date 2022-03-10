const burgerMenu = document.querySelector('.menu-burger');
const menuHeader = document.querySelector('.menu-show');
const closeMenu = document.querySelector('.menu-show');
// Start Menu Burger

burgerMenu.addEventListener('click', () =>{
  if (burgerMenu.classList.contains('menu-burger')) {
    burgerMenu.classList.toggle('open');
    menuHeader.classList.toggle('open');
  }
  else if(closeMenu) {
    closeMenu.classList.remove('open');
    burgerMenu.classList.remove('open');
  }
})
// End Menu Burger 


'use strict';
(function() {
  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 25);
    }
  }

  let goTopBtn = document.querySelector('.back_to_top');
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();
