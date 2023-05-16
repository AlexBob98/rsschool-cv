window.addEventListener("load", () => {
  const swiper = new Swiper(".swiper", {
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    centerSlide: "true",
    fade: "true",
    autoplay: {
      delay: 5000,
      pauseOnMouseEnter: true,
    },
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      595: {
        slidesPerView: 2,
      },
      999: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
});

const elements = document.getElementsByClassName("typing-text");
const delay = 50;

[...elements].forEach((item) => {
  let counter = 0;

  const element = item;
  const text = element.innerHTML;
  element.innerHTML = "";

  const typeWriter = () => {
    if (counter < text.length) {
      element.innerHTML += text.charAt(counter);
      counter++;
      setTimeout(typeWriter, delay);
    }
  }
  typeWriter();
})

