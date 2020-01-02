<template>
  <fragment>
    <div class="column is-7">
      <div :class="`card card-main ${anime}`">
        <header class="card-header">
          <p class="card-header-title">
            Certification
          </p>
        </header>
        <div class="card-content p m-t"></div>
      </div>
    </div>
    <div class="column is-1 ccc has-text-centered">
      <router-link to="/education">
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
