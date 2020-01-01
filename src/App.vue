<template>
  <div>
    <nav
      class="navbar container"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          @Fooku
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-end">
          <router-link to="/" class="navbar-item">ABOUT ME</router-link>
          <router-link to="/education" class="navbar-item"
            >EDUCATION
          </router-link>
          <router-link to="/education" class="navbar-item"
            >WORK EXPERIENCE
          </router-link>
        </div>
      </div>
    </nav>

    <div class="container main-m">
      <div class="columns">
        <div class="column is-4">
          <ImageCard />
        </div>
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import ImageCard from '@/components/ImageCard.vue'

export default {
  components: {
    ImageCard
  }
}
</script>

<style>
body {
  font-family: 'Questrial', sans-serif !important;
}
.main-m {
  margin-top: 3rem !important;
}
.card-main {
  height: 100%;
  border-radius: 25px;
}
.img-p {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  padding-left: 4rem;
  padding-right: 4rem;
}
.card-header-title {
  height: 5rem;
  padding: 3rem !important;
  font-size: 2rem;
}
.card-header {
  -webkit-box-shadow: 0 0px 0px rgba(10, 10, 10, 0.1) !important;
  border-bottom: 1.5px solid rgba(10, 10, 10, 0.1);
}
.m-t {
  margin-top: 1rem;
}
.p {
  padding: 3rem !important;
}
.lh {
  line-height: 160% !important;
}
.ccc {
  margin: auto;
  width: 60%;
  padding: 10px;
}
.animated-b {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
}
.animated-b:hover {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  -webkit-animation-name: bounce;
  animation-name: bounce;
  -webkit-transform-origin: center bottom;
  transform-origin: center bottom;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
</style>
