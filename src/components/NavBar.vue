<template>
  <nav
    class="navbar container bg-o "
    role="navigation"
    aria-label="main navigation"
  >
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
        <router-link to="/portfolio" class="navbar-item"
          >PORTFOLIO
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  color: #4a4a4a !important;
}
</style>
