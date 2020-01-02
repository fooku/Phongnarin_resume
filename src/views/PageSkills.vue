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
              <b-progress :value="vue" size="is-medium" show-value>
                Intermediate</b-progress
              >

              <span>React/Redux</span>
              <b-progress :value="react" show-value size="is-medium">
                Intermediate</b-progress
              >

              <span>Flutter</span>
              <b-progress :value="basic" size="is-medium" show-value>
                Basic</b-progress
              >
            </div>
            <div class="column is-6 p-skill">
              <p class="is-size-4 p-title">Programing language</p>

              <span>Golang</span>
              <b-progress :value="vue" size="is-medium" show-value>
                Intermediate</b-progress
              >

              <span>Javascript</span>
              <b-progress :value="vue" show-value size="is-medium">
                Intermediate</b-progress
              >

              <span>Dart</span>
              <b-progress :value="basic" size="is-medium" show-value>
                Basic</b-progress
              >
            </div>
            <div class="column is-6 p-skill">
              <p class="is-size-4 p-title">Database</p>

              <span>MySQL</span>
              <b-progress :value="react" size="is-medium" show-value>
                Intermediate</b-progress
              >

              <span>MongoDB</span>
              <b-progress :value="react" show-value size="is-medium">
                Intermediate</b-progress
              >
            </div>
            <div class="column is-6 p-skill">
              <p class="is-size-4 p-title">Continuous integratione</p>

              <span>Git</span>
              <b-progress :value="vue" size="is-medium" show-value>
                Intermediate</b-progress
              >

              <span>Docker</span>
              <b-progress :value="basic" show-value size="is-medium">
                Basic</b-progress
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
      react: 0,
      vue: 0,
      basic: 0,
      anime: 'animated bounceInRight'
    }
  },
  mounted() {
    setTimeout(() => {
      this.react = 10
    }, 700)
    setTimeout(() => {
      this.react = 50
    }, 900)
    setTimeout(() => {
      this.vue = 10
    }, 700)
    setTimeout(() => {
      this.vue = 60
    }, 900)
    setTimeout(() => {
      this.basic = 10
    }, 700)
    setTimeout(() => {
      this.basic = 35
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
</style>
