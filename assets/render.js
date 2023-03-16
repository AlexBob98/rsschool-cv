import { data } from "../json/data.js";
import { skills } from "../json/skills.js";
import { contact } from "../json/contact.js";
import { courses } from "../json/courses.js";

const containerProjectes = document.querySelector(".project-block");
const containerSkills = document.querySelector(".hard-skills");
const percentSkills = document.querySelector(".skills-levels");
const contactContainer = document.querySelector(".contact-info");
const courseContainer = document.getElementById("data-course");
const fullYear = document.getElementById("year");

const createDivProjectsFromDataJson = () => {
  data.map((item) => {
    containerProjectes.innerHTML += `<div class="project">
        <div class="image-project">
          <img src=${item.img} alt=${item.title} />
        </div>
        <div class="title-project">
          <a href=${item.href} target="_blank">
            <span>${item.title}</span>
          </a>
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
      ${item.certificate ? `<li style="font-size: 12px; text-align: center"><a
      href="${item.certificate}" target="_blank">(Certificate)</a></li>` : ""}
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
  fullYear.textContent = new Date().getFullYear()
});
