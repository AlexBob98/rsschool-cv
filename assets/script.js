const burgerMenu = document.querySelector(".header-nav__menu-burger");
const menuHeader = document.querySelector(".menu-show");
// Start Menu Burger

burgerMenu.addEventListener("click", () => {
  if (burgerMenu) {
    burgerMenu.classList.toggle("open");
    menuHeader.classList.toggle("open");
  } else {
    closeMenu.classList.remove("open");
    burgerMenu.classList.remove("open");
  }
});
// End Menu Burger
const lightTheme = document.querySelector(".switch_theme");
const butTheme = document.querySelector(".btn_theme");
const blocksTheme = document.querySelectorAll(
  ".hero, .about-container, .hero__info-text, .skills-box, .box, .about-me, .prof-skill, .project, .about-code, .courses__text, .courses__box-items, .projects, .contact, .about-lang, .footer-icons, .code-example, .contact-info, .back_to_top"
);

lightTheme.addEventListener("click", function () {
  butTheme.classList.toggle("light");
});

// Local Storage & Switch Light Theme
let themeMode = localStorage.getItem("theme");

const lightOn = () => {
  blocksTheme.forEach((item) => item.classList.add("dark"));
  document.body.classList.add("dark");
  butTheme.classList.add("light");
  localStorage.setItem("theme", "darkMode");
};
const lightOff = () => {
  blocksTheme.forEach((item) => item.classList.remove("dark"));
  document.body.classList.remove("dark");
  butTheme.classList.remove("dark");
  localStorage.setItem("theme", "lightMode");
};
if (themeMode === "darkMode") {
  lightOn();
}

lightTheme.addEventListener("click", () => {
  theme = localStorage.getItem("theme");
  if (theme !== "darkMode") {
    lightOn();
  } else {
    lightOff();
  }
});

(function () {
  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add("back_to_top-show");
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove("back_to_top-show");
    }
  }

  function backToTop() {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; // For Safari
  }

  let goTopBtn = document.querySelector(".back_to_top");
  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", backToTop);
})();
