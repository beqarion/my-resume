import experienceData from "../assets/data/workExperience.js"

export const renderExperience = () => {
  const experienceDOM = document.querySelector(".experience-wrapper")
  return new Promise((resolve, reject) => {
    try {
      const experienceHTML = experienceData
        .map((p) => {
          return `<!-- one work -->
    <article class="work">
      <div class="work-header">
        <!-- work name -->
        <div class="work-name">
          <h3 class="company job-title">${p.company}</h3>
          <span class="position experience-subtitle"
            >${p.role}</span
          >
        </div>
        <!-- location -->
        <div class="work-info">
          <h3 class="location job-title">${p.location}</h3>
          <span class="period experience-subtitle"
            >${p.timePeriod}</span
          >
        </div>
      </div>
      <!-- work description -->
      <ul class="job-description">
        <li class="work-description">
          <code>
            ${p.jobDesc}
          </code>
        </li>
      </ul>
    </article>
    <!-- end of one work -->`
        })
        .join("")
      experienceDOM.innerHTML = experienceHTML
      resolve(true)
    } catch (error) {
      console.log(
        `Couldn't render experience section cause of the error: ${error.message}`
      )
      reject(false)
    }
  })
}
