<template>
  <div class="about">
    <HelloWorld />
    <header class="about-header">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="site-heading">
              <h1 class="text-light">SOBRE MÍ</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container my-4">
    <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
            <p>Este es un blog dedicado al mundo automotor, en el cual te mostraré las últimas novedades de automóviles, los lanzamientos más recientes y te enseñaremos algunos tips para cuidar tu vehículo.</p>
            <p>Este es un medio independiente. Si te gusta nuestro contenido, ayúdanos en Patreon o haciendo una donación a través de PayPal. Te lo agradeceré mucho.</p>
        </div>
    </div>
</div>
  </div>
  <FooterPage />
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "AboutView",
  components: {
    HelloWorld,
    FooterPage,
  },
};
</script>
<style>
.about-header {
  background-image: url("../assets/img/about-bg.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
h1{
  text-shadow: 1px 1px 6px rgb(59, 59, 59);
}
</style>
