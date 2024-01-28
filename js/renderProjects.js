import projectsData from "../assets/data/projects.js"
const projectsDOM = document.querySelector(".projects-wrapper")

export const renderProjects = () => {
  return new Promise((resolve, reject) => {
    try {
      const projectsHTML = projectsData
        .map((p) => {
          return `<article class="project">
          <div class="project-header">
            <h3 class="project-title"><a href=${p.url} target=_blank>${
            p.name
          }</a></h3>
              <span>used technologies:</span>
            </div>
            <ul>
              <li class="project-tools"><code>${p.tools
                .map((t) => t)
                .join(", ")}</code></li>
            </ul>
            </article>`
        })
        .join("")
      projectsDOM.innerHTML = projectsHTML
      resolve(true)
    } catch (error) {
      console.log(`rendering projects failed with error: ${error}`)
      reject(false)
    }
  })
}
