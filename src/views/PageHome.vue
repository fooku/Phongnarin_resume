<template>
  <fragment>
    <div class="column is-7">
      <div :class="`card card-main ${anime}`">
        <header class="card-header">
          <p class="card-header-title">
            About Me
          </p>
        </header>
        <div class="card-content p">
          <p class="title line-hight-introduce">
            <span class="is-size-1">Hello!</span> <br />
            I'm a full-stack software engineer <br />
            who is keen to keep learning in a rapidly changing technology world
            while emphasizing retaining code quality.
          </p>
          <hr class="m-hr my-25" />
          <div>
            <a
              href="https://www.facebook.com/fooku.noon"
              class="c-facebook"
              target="_blank"
            >
              <i class="fab fa-facebook-square fa-3x mr-3"> </i
            ></a>
            <a
              href="https://www.instagram.com/ukigen_u/?fbclid=IwAR3FqKcXUY5yfBWLmfIx2siDCRfA0GFL70JQTd8UW8J4xUUVQ64LnWaPPHY"
              class="c-ig"
              target="_blank"
            >
              <i class="fab fa-instagram fa-3x mr-3"></i
            ></a>
            <a
              href="https://twitter.com/Fooku13"
              class="c-twitter"
              target="_blank"
            >
              <i class="fab fa-twitter-square fa-3x mr-3"></i
            ></a>
            <a
              href="https://www.linkedin.com/in/phongnarin-nurnuansuwan-660679179"
              class="c-linkedin "
              target="_blank"
            >
              <i class="fab fa-linkedin fa-3x"></i
            ></a>

            <div class="mt-3">
              <b-button
                href="/files/Phongnarin_resume.pdf"
                size="is-large"
                tag="a"
                target="_blank"
                download
              >
                <i class="far fa-file-pdf fa-lx mr-1"></i>
                Download resume
              </b-button>
            </div>
          </div>
        </div>
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

<style>
.c-facebook {
  color: #3b5998 !important;
}

.c-ig {
  color: #d6249f !important;
}
.c-twitter {
  color: #00acee !important;
}
.c-linkedin {
  color: #0e76a8 !important;
}
.line-hight-introduce {
  line-height: 1.6;
}
</style>
