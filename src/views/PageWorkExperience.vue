<template>
  <fragment>
    <div class="column is-7">
      <div :class="`card card-main ${anime}`">
        <header class="card-header">
          <p class="card-header-title">
            Work Experience
          </p>
        </header>
        <div class="card-content p">
          <div
            class="timeline right overflow-scroll-experience"
            id="timeline-5e0c4476567b9"
          >
            <div class="timeline-item">
              <h4>2019</h4>
              <span class="item-period">Freelance</span>
              <ul>
                <li>
                  Developed an education platform, wellbalancedenglish.com,
                  enabling students to study via video lessons.
                </li>
                <li>
                  Implemented an admin system for managing student and teacher
                  schedules through a CMS.
                </li>
                <li>
                  Utilized Next.js for the frontend, Golang for the backend,
                  Firebase Auth for authentication, and PostgreSQL for database
                  management.
                </li>
              </ul>
            </div>
            <div class="timeline-item">
              <h4>2019</h4>
              <span class="item-period">Cariva (Thailand) Co Ltd, Bangkok</span>
              <ul>
                <li>
                  Developed a health promotion platform that incentivizes people
                  who are physically active with exclusive rewards of their own
                  choices, Nexcercise, backend using Golang, PostgreSQL ,Redis,
                  Amazon SQS.
                </li>
              </ul>
            </div>
            <div class="timeline-item">
              <h4>2020 - 2022</h4>
              <span class="item-period"
                >Odd-e (Thailand) Co Ltd. (Outsource), Bangkok</span
              >
              <div class="timeline right" id="timeline-5e0c4476567b9">
                <div class="timeline-item">
                  <span class="item-period"
                    >SET, Bangkok (1 years), Full-stack software engineer</span
                  >
                  <ul>
                    <li>
                      Developed financial an analysis web application, Setsmart,
                      both frontend and backend using React, Angular, and Java
                      spring boot.
                    </li>
                    <li>
                      Developed the payment section in Smart marketplace to
                      serve subscribers.
                    </li>
                    <li>
                      Researched Tradingview library and prepare data API for
                      technical teams.
                    </li>
                  </ul>
                </div>
                <div class="timeline-item">
                  <span class="item-period"
                    >PEA, Bangkok (3 months), Full-stack software engineer</span
                  >
                  <ul>
                    <li>
                      Involved in planning, consulting, and designing database
                      and API with the PEA team.
                    </li>
                    <li>
                      Led the team to adopt an agile process.
                    </li>
                    <li>
                      Developed electric outage visualization map web
                      application, Outagemap both frontend and backend using
                      React, Golang, Django.
                    </li>
                  </ul>
                </div>
                <div class="timeline-item">
                  <span class="item-small"
                    >PTT EP, Bangkok (4 months), Full-stack software
                    engineer</span
                  >
                  <ul>
                    <li>
                      Developed activity dashboard internal web application
                      using Angular, and Golang.
                    </li>
                  </ul>
                </div>
                <div class="timeline-item">
                  <span class="item-small"
                    >KTB, Bangkok (11 months), Full-stack software
                    engineer</span
                  >
                  <ul>
                    <li>
                      Developed admin portal and dashboard to control bond
                      product in Paopang application using Vue, Golang.
                    </li>
                    <li>
                      Developed bond secondary and design of the API With many
                      teams in Paopang application with Go, gRpc, Kafka, and
                      Microservice concept.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <h4>2019</h4>
              <span class="item-small"
                >Cooperative Education at General Electronic Commerce
                ,Bangkok</span
              >
              <ul>
                <li>
                  Worked as a full stack developer in a team to develop web
                  applications using React, Redux and Golang.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-1 next-page has-text-centered">
      <router-link to="/skills">
        <i class="fas fa-chevron-left fa-5x animated-b"></i
      ></router-link>
    </div>
  </fragment>
</template>

<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.anime = 'animated zoomOutUp'
    setTimeout(() => next(), 300)
  },
  data() {
    return {
      anime: 'animated bounceInRight'
    }
  }
}
</script>

<style>
.overflow-scroll-experience {
  height: 565px;
  overflow: scroll;
}
ul {
  list-style: disc !important;
  margin-left: 1rem !important;
}
</style>
