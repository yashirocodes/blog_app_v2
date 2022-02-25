<template>
  <div class="home">
    <HelloWorld />
    <header class="bg-header">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="text-center">
              <h1 class="text-light">V8</h1>
              <span class="text-light">Noticias y reseñas de automóviles</span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- main content -->
    <div class="container mt-3">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10 col-lg-8">
          <div class="post-preview">
            <router-link class="link-to" to="/post/1">
              <h2 class="post-title">
                <strong>Chevrolet presenta la totalmente nueva Blazer</strong>
              </h2>
              <h3 class="text-dark fs-5">
                Llega como la primera SUV deportiva de la marca
              </h3>
            </router-link>
          </div>
          <hr />
        </div>
      </div>
    </div>
  </div>
  <FooterPage/>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FooterPage from "@/components/FooterPage.vue"

export default {
  name: "HomeView",
  components: {
    HelloWorld,
    FooterPage,
  },
};
</script>

<style>
.bg-header {
  background-image: url("../assets/img/home-bg.jpg");
  background-size: cover;
  background-position: center;
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.link-to{
  text-decoration: none;
}
</style>
