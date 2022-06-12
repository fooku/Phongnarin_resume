<template>
  <div class="card card-main">
    <div class="card-image img-p">
      <figure class="image">
        <img
          class="is-rounded"
          src="@/assets/images/profile.jpg"
          alt="Placeholder image"
        />
      </figure>
    </div>
    <div class="card-content mb-1">
      <p class="title is-4">Phongnarin Nurnuansuwan</p>
      <p class="subtitle is-6">@Fooku</p>

      <hr class="m-hr" />

      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-2 has-text-centered">
          <i class="fas fa-map-pin fa-lg"></i>
        </div>
        <div class="column">
          Bangkok, THAILAND
        </div>
      </div>

      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-2 has-text-centered">
          <i class="far fa-envelope fa-lg"></i>
        </div>
        <div class="column">
          noonphongnarin@gmail.com
        </div>
      </div>

      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-2 has-text-centered">
          <i class="fab fa-github fa-lg"></i>
        </div>
        <div class="column is-10">
          <a href="https://github.com/fooku" target="_blank">
            github.com/fooku</a
          >
        </div>
      </div>

      <div class="columns is-multiline is-mobile is-centered">
        <div class="column is-2 has-text-centered">
          <i class="fab fa-medium fa-lg"></i>
        </div>
        <div class="column is-10">
          <a href="https://fooku-oxy.medium.com" target="_blank">
            fooku-oxy.medium</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* .card-content {
  padding: 0px;
  padding-right: 1.5rem;
  padding-left: 1.5rem;
} */
.icon-profile {
  display: block;
  padding: 0.25rem;
}
.m-hr {
  margin-top: 1rem;
  margin-bottom: 2.25rem;
}

.mb-1 {
  margin-bottom: 1rem;
}
.mb-2 {
  margin-bottom: 2rem;
}

hr {
  width: 0%;
  min-width: 50%;
  max-width: 100%;
  margin: 0 auto;
  border: none;
  border-bottom: 1px solid #666;
  position: relative;
  transition: box-shadow 200ms ease-in-out;
  box-shadow: 0px 0px 0px 0px #f9f9f9;
}
</style>
