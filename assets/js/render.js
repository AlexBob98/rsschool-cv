import { data } from "../../json/data.js";
import { skills } from "../../json/skills.js";
import { contact } from "../../json/contact.js";
import { courses } from "../../json/courses.js";

const containerProjectes = document.querySelector(".swiper-wrapper");
const contactContainer = document.querySelector(".contact-info");
const courseContainer = document.getElementById("data-course");
const fullYear = document.getElementById("year");
const skillsContainer = document.querySelector(".skills-block__container");

skills.forEach((item) => {
  skillsContainer.append(progress(item))
});

function progress(args) {
  const div = document.createElement('div');
  div.classList.add('skills-block__stack')

  div.innerHTML = `
  <span>${args[0]}</span>
  <div class="circular-progress" data-inner-circle-color="lightgrey" data-percentage="${args[1]}" data-progress-color="${args[2]}" data-bg-color="#b1b0b0">
  <div class="inner-circle"></div>
  <p class="percentage">0%</p>
</div>
  `;
  
  return div;
}

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
  createContactFromJsonData();
  createCourseFromDataJson();
  fullYear.textContent = new Date().getFullYear();
});
