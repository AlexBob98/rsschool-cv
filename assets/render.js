import { data } from "../json/data.js";
import { skills } from "../json/skills.js";
import { contact } from "../json/contact.js";
import { courses } from "../json/courses.js";

const containerProjectes = document.querySelector(".swiper-wrapper");
const containerSkills = document.querySelector(".skills-block__stack");
const percentSkills = document.querySelector(".skills-block__level");
const contactContainer = document.querySelector(".contact-info");
const courseContainer = document.getElementById("data-course");
const fullYear = document.getElementById("year");

const createDivProjectsFromDataJson = () => {
  data.map((item) => {
    containerProjectes.innerHTML += `<div class="swiper-slide">
    <div class="swiper-block">
    <div class="image-project">
    <a href=${item.href} target="_blank">
    <img src=${item.img} alt=${item.title.split(" ").join("-")} /></a>
    </div>
    <div class="title-project">
    <a href=${item.href} target="_blank">
    <span>${item.title}</span></a>
    </div>
    </div>
    </div>`;
  });
};

const createProjectsFromJsonData = () => {
  skills.map((item) => {
    containerSkills.innerHTML += `<li class="skill">${item.name}</li>`;
    percentSkills.innerHTML += `
    <div class="progress">
      <span
        class="progress-bar"
        style="width: ${item.skills}"
        title="${item.skills}"
      ></span>
    </div>`;
  });
};

const createContactFromJsonData = () => {
  contact.map((item) => {
    contactContainer.innerHTML += `<li class="contact-block">
    <div class="contact-image">
      <img
        width="35"
        src=${item.img}
        alt=${item.name}
      />
    </div>
    <div class="contact-text">
      <a
        href=${item.href}
        target="_blank"
        class="contact__link"
        >${item.name}</a
      >
    </div>
  </li>`;
  });
};

const createCourseFromDataJson = () => {
  courses.map((item) => {
    const list = item.course.join("<li>");

    courseContainer.innerHTML += `<div class="box">
    <div class="image-box">
      <span
        ><img src=${item.img} alt=${item.name}
      /></span>
    </div>
    <div class="text-box"><h3>${item.name}</h3></div>
    <div class="text-in-box">
      <ul>
      <li>${list}</li>
      ${
        item.certificate
          ? `<li style="font-size: 12px; text-align: center"><a
      href="${item.certificate}" target="_blank">(Certificate)</a></li>`
          : ""
      }
      </ul>
    </div>
  </div>`;
  });
};

window.addEventListener("load", () => {
  createDivProjectsFromDataJson();
  createProjectsFromJsonData();
  createContactFromJsonData();
  createCourseFromDataJson();
  fullYear.textContent = new Date().getFullYear();

  const swiper = new Swiper(".swiper", {
    loop: true,
    autoHeight: true,
    spaceBetween: 20,
    centerSlide: "true",
    fade: "true",
    autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true
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
