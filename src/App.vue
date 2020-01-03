<template>
  <div class="bg">
    <NavBar />
    <div class="container mb-3 main-m">
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
import NavBar from '@/components/NavBar.vue'

export default {
  components: {
    ImageCard,
    NavBar
  }
}
</script>

<style>
body {
  font-family: 'Nunito', sans-serif !important;
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
  border-bottom: 2px solid #00a5a9;
}
a {
  color: #00a5a9 !important;
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
.button.is-success {
  background-color: #00a5a9 !important;
}
.mb-3 {
  margin-bottom: 3rem !important;
}

.mt-3 {
  margin-top: 3rem !important;
}

.my-25 {
  margin-top: 2.5rem !important;
  margin-bottom: 2.5rem !important;
}
.mr-1 {
  margin-right: 1rem;
}
.mr-3 {
  margin-right: 3rem;
}
</style>
