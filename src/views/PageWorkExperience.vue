<template>
  <fragment>
    <div class="column is-7">
      <div :class="`card card-main ${anime}`">
        <header class="card-header">
          <p class="card-header-title">
            Work Experience
          </p>
        </header>
        <div class="card-content p overflow-scroll">
          <div class="timeline right" id="timeline-5e0c4476567b9">
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
                  <p>
                    Developed financial an analysis web application, Setsmart,
                    both frontend and backend using React, Angular, and Java
                    spring boot.
                  </p>
                  <p>
                    Developed the payment section in Smart marketplace to serve
                    subscribers.
                  </p>
                  <p>
                    Researched Tradingview library and prepare data API for
                    technical teams.
                  </p>
                </div>
                <div class="timeline-item">
                  <span class="item-period"
                    >PEA, Bangkok (3 months), Full-stack software engineer</span
                  >
                  <p>
                    Involved in planning, consulting, and designing database and
                    API with the PEA team.
                  </p>
                  <p>
                    Led the team to adopt an agile process.
                  </p>
                  <p>
                    Developed electric outage visualization map web application,
                    Outagemap both frontend and backend using React, Golang,
                    Django.
                  </p>
                </div>
                <div class="timeline-item">
                  <span class="item-small"
                    >PTT EP, Bangkok (4 months), Full-stack software
                    engineer</span
                  >
                  <p>
                    Developed activity dashboard internal web application using
                    Angular, and Golang.
                  </p>
                </div>
                <div class="timeline-item">
                  <span class="item-small"
                    >KTB, Bangkok (11 months), Full-stack software
                    engineer</span
                  >
                  <p>
                    Developed admin portal and dashboard to control bond product
                    in Paopang application using Vue, Golang.
                  </p>
                  <p>
                    Developed bond secondary and design of the API With many
                    teams in Paopang application with Go, gRpc, Kafka, and
                    Microservice concept.
                  </p>
                </div>
              </div>
            </div>

            <div class="timeline-item">
              <h4>2019</h4>
              <span class="item-period">Freelance</span>
              <p>
                Developed e-learning websites, www.wellbalancedenglish.com,
                using React ,Redux ,Golang and MongoDB and designed user
                interface.
              </p>
            </div>
            <div class="timeline-item">
              <h4>2019</h4>
              <span class="item-small"
                >Cooperative Education at General Electronic Commerce
                ,Bangkok</span
              >
              <p>
                Worked as a full stack developer in a team to develop web
                applications using React, Redux and Golang.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-1 ccc has-text-centered">
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
.overflow-scroll {
  height: 565px;
  overflow: scroll;
}
</style>
