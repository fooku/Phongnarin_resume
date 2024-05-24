<template
  ><fragment>
    <div class="column is-7">
      <div :class="`card card-main ${anime}`">
        <header class="card-header">
          <p class="card-header-title">
            PORTFOLIO
          </p>
        </header>
        <div class="card-content">
          <section class="c_c">
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
          </section>
          <div class="columns is-multiline">
            <div class="column is-4">
              <div
                class="cw"
                @click="redirect('https://wellbalancedenglish.com/')"
              >
                <figure class="image">
                  <img src="@/assets/images/port01.png" alt="port" />
                </figure>
                <div class="overlay">
                  <div class="text">Well balanced english</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-1 next-page has-text-centered">
      <router-link to="/">
        <i class="fas fa-level-up-alt fa-4x animated-b"></i
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
      anime: 'animated bounceInRight',
      radioButton: 'all',
      isImageModalActive: false,
      image: 'port01.png'
    }
  },
  methods: {
    redirect(url) {
      window.open(
        url,
        '_blank' // <- This is what makes it open in a new window.
      )
      // window.location.href = url
    }
  }
}
</script>

<style>
.c_c {
  padding-bottom: 1.5rem;
}
.hh {
  height: 100%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #00a6a9ea;
}

.cw:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
