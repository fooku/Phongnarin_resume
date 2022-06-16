<template>
  <fragment>
    <div class="column is-7">
      <div :class="`card card-main ${anime}`">
        <header class="card-header">
          <p class="card-header-title">
            Skills
          </p>
        </header>
        <div class="card-content">
          <div class="columns is-multiline is-mobile">
            <div class="column is-6 p-skill">
              <p class="is-size-4 p-title">Technologies & Framework</p>

              <span>Vue/Vuex</span>
              <b-progress
                type="is-success"
                :value="intermediate"
                size="is-medium"
                show-value
              >
                middle experienced</b-progress
              >

              <span>React/Redux</span>
              <b-progress
                type="is-success"
                :value="intermediate"
                show-value
                size="is-medium"
              >
                middle experienced</b-progress
              >
            </div>
            <div class="column is-6 p-skill">
              <p class="is-size-4 p-title">Programing language</p>

              <span>Golang</span>
              <b-progress
                type="is-success"
                :value="expert"
                size="is-medium"
                show-value
              >
                highly experienced</b-progress
              >

              <span>Javascript</span>
              <b-progress
                type="is-success"
                :value="expert"
                show-value
                size="is-medium"
              >
                highly experienced</b-progress
              >
            </div>
            <div class="column is-6 p-skill">
              <p class="is-size-4 p-title">Database</p>

              <span>SQL</span>
              <b-progress
                type="is-success"
                :value="intermediate"
                size="is-medium"
                show-value
              >
                middle experienced</b-progress
              >

              <span>MongoDB</span>
              <b-progress
                type="is-success"
                :value="basic"
                show-value
                size="is-medium"
              >
                less experienced</b-progress
              >
            </div>
            <div class="column is-6 p-skill">
              <p class="is-size-4 p-title">Other technologies</p>

              <span>Git</span>
              <b-progress
                type="is-success"
                :value="expert"
                size="is-medium"
                show-value
              >
                highly experienced</b-progress
              >

              <span>Docker</span>
              <b-progress
                type="is-success"
                :value="intermediate"
                show-value
                size="is-medium"
              >
                middle experienced</b-progress
              >

              <span>Kafka</span>
              <b-progress
                type="is-success"
                :value="intermediate"
                show-value
                size="is-medium"
              >
                middle experienced</b-progress
              >

              <span>Jenkins</span>
              <b-progress
                type="is-success"
                :value="intermediate"
                show-value
                size="is-medium"
              >
                middle experienced</b-progress
              >

              <span>Redis</span>
              <b-progress
                type="is-success"
                :value="intermediate"
                show-value
                size="is-medium"
              >
                middle experienced</b-progress
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-1 ccc has-text-centered">
      <router-link to="/certification">
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
      intermediate: 0,
      expert: 0,
      basic: 0,
      anime: 'animated bounceInRight'
    }
  },
  mounted() {
    setTimeout(() => {
      this.intermediate = 10
    }, 700)
    setTimeout(() => {
      this.intermediate = 50
    }, 900)
    setTimeout(() => {
      this.expert = 10
    }, 700)
    setTimeout(() => {
      this.expert = 90
    }, 900)
    setTimeout(() => {
      this.basic = 10
    }, 700)
    setTimeout(() => {
      this.basic = 30
    }, 800)
  }
}
</script>

<style>
.p-skill {
  padding-top: 1.5rem !important;
  padding-right: 2rem !important;
  padding-left: 2rem !important;
}
.p-title {
  padding-bottom: 0.8rem !important;
}
.progress-wrapper:not(:last-child) {
  margin-bottom: 0.5rem !important;
}

.progress.is-success::-webkit-progress-value {
  background-color: #7bccd4 !important;
}

.progress.is-success::-moz-progress-bar {
  background-color: #7bccd4 !important;
}

.progress.is-success::-ms-fill {
  background-color: #7bccd4 !important;
}
</style>
