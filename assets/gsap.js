gsap.registerPlugin(ScrollTrigger);
// header
gsap.from(".header-nav", {
  duration: 1,
  scrollTrigger: {
    trigger: ".header-nav",
  },
  y: -100,
  opacity: 0,
});

// hero text
gsap.from(".hero__info-text", {
  duration: 1,
  scrollTrigger: {
    trigger: ".hero__info-text",
  },
  x: -100,
  opacity: 0,
  clearProps: "transform",
});

// hero image
gsap.from(".hero__info-img", {
  duration: 1,
  scrollTrigger: {
    trigger: ".hero__info-img",
  },
  x: 100,
  opacity: 0,
  clearProps: "transform",
});

// section about me
gsap.from(".about__block", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".hero",
  },
  y: 200,
  opacity: 0,
  clearProps: "transform",
});

// section skills-block
gsap.from(".skills-block__box", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".skills",
  },
  y: 200,
  opacity: 0,
  clearProps: "transform",
});

// section example-code__block
gsap.from(".example-code__block", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".example-code",
  },
  y: 200,
  opacity: 0,
  clearProps: "transform",
});

// section courses__box-items
gsap.from(".courses__box-container", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".courses",
  },
  y: 200,
  opacity: 0,
  clearProps: "transform",
});

// projects section
gsap.from(".swiper", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".swiper",
  },
  y: 200,
  opacity: 0,
  clearProps: "transform",
});

// contact section
gsap.from(".contact-education1 .contact-info", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".contact-education1",
  },
  x: -200,
  opacity: 0,
});

// contact section
gsap.from(".contact-education2 .contact-info", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".contact-education2",
  },
  x: 200,
  opacity: 0,
  clearProps: "transform",
});
