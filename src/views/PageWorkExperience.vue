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
          <div class="timeline right" id="timeline-5e0c4476567b9">
            <div class="timeline-item">
              <h4>2019</h4>
              <span class="item-small"
                >Cooperative Education at General Electronic Commerce ,Bangkok
                (4 months)</span
              >
              <p>
                Worked as a full stack developer in a team to develop web
                applications using React, Redux and Golang.
              </p>
            </div>
            <div class="timeline-item">
              <h4>2018 - 2019</h4>
              <span class="item-period">freelance</span>
              <p>
                Developed e-learning websites; www.wellbalancedenglish.com,
                www.thetoptutoronline.com using React ,Redux ,Golang and MongoDB
                and designed user interface.
              </p>
            </div>
            <!-- <div class="timeline-item">
              <h4 class="item-title">Specialization Course</h4>
              <span class="item-period">2010</span>
              <span class="item-small">Apple Inc.</span>
              <p>
                Mauris magna sapien, pharetra consectetur fringilla vitae,
                interdum sed tortor.
              </p>
            </div> -->
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

<style></style>
