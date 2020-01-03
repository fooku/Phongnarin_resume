<template>
  <fragment>
    <div class="column is-7">
      <div :class="`card card-main ${anime}`">
        <header class="card-header">
          <p class="card-header-title">
            Portfolio
          </p>
        </header>
        <div class="card-content">
          <div class="columns h-100 is-vcentered">
            <div class="column is-12 has-text-centered">
              <p>
                <i class="fas fa-history fa-5x m-b" />
              </p>
              <p>Coming soon</p>
            </div>
          </div>

          <!-- <section class="c_c">
            <b-field>
              <b-radio-button
                v-model="radioButton"
                native-value="all"
                type="is-success"
              >
                <span>All</span>
              </b-radio-button>
              <b-radio-button
                v-model="radioButton"
                native-value="Disabled"
                disabled
              >
                Other
              </b-radio-button>
            </b-field>
          </section> -->
          <div class="columns is-multiline">
            <!-- <div class="column is-4">
              <div class="cw">
                <figure class="image">
                  <img class="crop" src="@/assets/images/cer02.png" />
                </figure>
                <div class="overlay">
                  <div class="text">Web Performance Optimization</div>
                </div>
              </div>
            </div> -->
          </div>
        </div>
      </div>
    </div>
    <div class="column is-1 ccc has-text-centered">
      <router-link to="/">
        <i class="fas fa-level-up-alt fa-5x animated-b"></i>
      </router-link>
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
      anime: 'animated bounceInRight',
      radioButton: 'all',
      isImageModalActive: false,
      image: 'cer01.png'
    }
  }
}
</script>

<style>
.h-100 {
  height: 50vh;
}
.m-b {
  margin-bottom: 1rem;
}
</style>
