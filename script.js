import { renderProjects } from "./js/renderProjects.js"
import { renderExperience } from "./js/renderWorkExp.js"

const projectsSection = document.querySelector(".projects")
const experienceSection = document.querySelector(".experience-section")
const educationSection = document.querySelector(".education-section")

Promise.all([renderProjects(), renderExperience()]).then(
  ([didProjectsRendered, didExperienceRendered]) => {
    projectsSection.style.display = "block"
    experienceSection.style.display = "block"
    educationSection.style.display = "block"
  }
)
