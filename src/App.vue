<template>
  <div class="bg">
    <nav
      class="navbar container bg-o "
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <!-- <a class="navbar-item">
          @Fooku
        </a> -->
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
          <router-link to="/work-experience" class="navbar-item"
            >WORK EXPERIENCE
          </router-link>
          <router-link to="/skills" class="navbar-item">SKILLS </router-link>
          <router-link to="/certification" class="navbar-item"
            >CERTIFICATIONS
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
.bg {
  background-image: url('~@/assets/images/bg.jpg');
  background-size: cover;
  height: 100vh;
  background-color: #808080;
}
.bg-o {
  background-color: transparent !important;
}
.navbar .navbar-menu .navbar-end .router-link-exact-active {
  background-color: '';
  color: '';
  border-bottom: 2px solid #7957d5;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: transparent !important;
  color: #4a4a4a !important;
}
a.navbar-item:focus,
a.navbar-item:focus-within,
a.navbar-item:hover,
a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: #fafafa;
  color: #7957d5;
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
