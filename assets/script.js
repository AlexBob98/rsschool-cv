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
const lightTheme = document.querySelector('.switch_theme');
const butTheme = document.querySelector('.btn_theme');
const blocksTheme = document.querySelectorAll('.profession-photo, .about-container, .text-container, .skills-box, .box, .about-me, .prof-skill, .project, .about-code, .coursestext, .box-blocks, .projects, .contact, .about-lang, .footer-icons, .code-example, .contact-info, .back_to_top');


lightTheme.addEventListener('click', function () {
  butTheme.classList.toggle('light'); 
})

// Local Storage & Switch Light Theme
let themeMode = localStorage.getItem('theme')

const lightOn = () => {
  blocksTheme.forEach(item => item.classList.add('dark'));
  document.body.classList.add('dark');
  butTheme.classList.add('light');
  localStorage.setItem('theme', 'darkMode') 
}
const lightOff = () => {
  blocksTheme.forEach(item => 
  item.classList.remove('dark'))
  document.body.classList.remove('dark');
  butTheme.classList.remove('dark');
  localStorage.setItem('theme', 'lightMode')
}
if (themeMode === 'darkMode') {
lightOn()
} 

lightTheme.addEventListener('click', () => {
  theme = localStorage.getItem('theme');
  if(theme !== 'darkMode') {
      lightOn()
  } else {
      lightOff()
  }
});
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




// const buttonsWrapper = document.querySelector(".map");
// const slides = document.querySelector(".box-container");

// buttonsWrapper.addEventListener("click", e => {
//   if (e.target.nodeName === "BUTTON") {
//     Array.from(buttonsWrapper.children).forEach(item =>
//       item.classList.remove("actives")
//     );
//     if (e.target.classList.contains("first")) {
//       slides.style.transform = "translateX(-0%)";
//       e.target.classList.add("actives");
//     } else if (e.target.classList.contains("second")) {
//       slides.style.transform = "translateX(-10%)";
//       slides.style.transition = "all 0.8s ease-in-out";
//       e.target.classList.add("actives");
//     } else if (e.target.classList.contains('third')){
//       slides.style.transform = 'translatex(-20%)';
//       e.target.classList.add('actives');
//     }
//   }
// });





// function parallaxEffect() {
//   // Add event listener
//   sectionParall.addEventListener("mousemove", parallax);
//   const elem = document.querySelector(".text-container");
//   // Magic happens here
//   function parallax(e) {
//       let mouseX = e.clientX / 90;
//       let mouseY = e.clientY / 90;
//       let depth1 = `${(mouseY) * 0.9}%`
//       let depth2 = `${(mouseX) * 0.9}%`;
//       console.log(depth2)
//       elem.style.transform = `translateX(${depth2}) translateY(${depth1})`;

//   }

// }
// parallaxEffect();


