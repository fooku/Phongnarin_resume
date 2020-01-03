<template>
  <fragment>
    <div class="column is-7">
      <div :class="`card card-main ${anime}`">
        <header class="card-header">
          <p class="card-header-title">
            Certification
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
              <div class="cw" @click="clinkModal('cer01.jpg')">
                <figure class="image">
                  <img src="@/assets/images/cer01.jpg" />
                </figure>
                <div class="overlay">
                  <div class="text">Getting Started with Vue.js</div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="cw" @click="clinkModal('cer02.jpg')">
                <figure class="image">
                  <img src="@/assets/images/cer02.jpg" />
                </figure>
                <div class="overlay">
                  <div class="text">Web Performance Optimization</div>
                </div>
              </div>
            </div>

            <div class="column is-4">
              <div class="cw" @click="clinkModal('cer03.jpg')">
                <figure class="image">
                  <img src="@/assets/images/cer03.jpg" />
                </figure>
                <div class="overlay">
                  <div class="text">Exposition of engineering project 2018</div>
                </div>
              </div>
            </div>
            <div class="column  is-4">
              <div class="cw" @click="clinkModal('cer04.jpg')">
                <figure class="image">
                  <img src="@/assets/images/cer04.jpg" />
                </figure>
                <div class="overlay">
                  <div class="text">Professional web designer 2013</div>
                </div>
              </div>
            </div>
            <div class="column  is-4">
              <div class="cw" @click="clinkModal('cer05.jpg')">
                <figure class="image">
                  <img src="@/assets/images/cer05.jpg" />
                </figure>
                <div class="overlay">
                  <div class="text">Cooperative Education</div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="cw" @click="clinkModal('cer06.jpg')">
                <figure class="image crop">
                  <img src="@/assets/images/cer06.jpg" />
                </figure>
                <div class="overlay">
                  <div class="text">An outstanding intern of the year 2018</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <b-modal :active.sync="isImageModalActive">
        <p class="image">
          <img :src="img" />
        </p>
      </b-modal>
    </div>
    <div class="column is-1 ccc has-text-centered">
      <router-link to="/portfolio">
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
      anime: 'animated bounceInRight',
      radioButton: 'all',
      isImageModalActive: false,
      image: 'cer01.jpg'
    }
  },
  computed: {
    img() {
      return require('@/assets/images/' + this.image)
    }
  },
  methods: {
    clinkModal(image) {
      this.isImageModalActive = true
      this.image = image
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
.cw {
  position: relative;
  cursor: pointer;
  height: 100%;
  max-height: 165px;
}

.crop {
  max-height: 165px;
  overflow: hidden; /*hide bounds of image */
  margin: 0;
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
