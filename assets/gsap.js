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
gsap.from(".about-container", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".hero",
  },
  y: 200,
  opacity: 0,
});

// projects section
gsap.from(".project-block", {
  duration: 2.5,
  scrollTrigger: {
    trigger: ".project-block",
  },
  y: 200,
  opacity: 0,
});

// contact section
gsap.from(".contact-education1 .contact-info", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".contact-info",
  },
  x: -200,
  opacity: 0,
});

// contact section
gsap.from(".contact-education2 .contact-info", {
  duration: 1.5,
  scrollTrigger: {
    trigger: ".contact-info",
  },
  x: 200,
  opacity: 0,
});
