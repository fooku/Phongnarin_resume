<template>
  <fragment>
    <div class="column is-7">
      <div :class="`card card-main ${anime}`">
        <header class="card-header">
          <p class="card-header-title">
            Education
          </p>
        </header>
        <div class="card-content p">
          <div class="timeline right" id="timeline-5e0c4476567b9">
            <div class="timeline-item">
              <h4>2023 - 2024</h4>
              <span class="item-small"
                >BROWNS English Language School, Brisbane, Australia</span
              >
              <p>
                Intensive General English
              </p>
            </div>
            <div class="timeline-item">
              <h4>2015 - 2019</h4>
              <span class="item-small"
                >Suranaree University of Technology,</span
              >
              <p>
                Nakhon Ratchasima Bachelor of Engineering in Computer
                Engineering,
              </p>
            </div>
            <div class="timeline-item">
              <h4>2008 - 2014</h4>
              <span class="item-period">Hight School</span>
              <p>
                Ratchasima Witthayalai School, Nakhon Ratchasima
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-1 next-page has-text-centered">
      <router-link to="/work-experience">
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
.timeline {
  border-left: 2px solid #e0e0e0;
  padding: 20px 0;
}
.timeline-item {
  position: relative;
  padding: 15px 20px 10px;
  margin-left: 20px;
  margin-bottom: 20px;
  background-color: #fff;
  border-left: 2px solid #7bccd4;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.2);
}
.timeline-item:before {
  content: '';
  display: inline-block;
  position: absolute;
  background-color: #fff;
  border-radius: 10px;
  width: 12px;
  height: 12px;
  top: 20px;
  left: -29px;
  border: 3px solid #7bccd4;
  z-index: 2;
}
.timeline-item:after {
  content: '';
  display: inline-block;
  position: absolute;
  background-color: #7bccd4;
  border-radius: 10px;
  width: 29px;
  height: 2px;
  top: 25px;
  left: -29px;
  z-index: 1;
}
</style>
