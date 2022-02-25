<template>
  <div>
    <HelloWorld />
    <header class="error-header">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto">
            <div class="post-heading">
              <h1 class="text-light">Pagina No encontrada</h1>
            </div>
          </div>
        </div>
      </div>
    </header>
     <div class="container">
        <div class="row">
            <div class="col-md-10 col-lg-8 mx-auto">
                <div class="post-heading">
                    <h2 class="my-5">Error 404 / Pagina No Encontrada</h2>
                </div>
            </div>
        </div>
    </div>
    
    <FooterPage />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "Error",
  components: {
    HelloWorld,
    FooterPage,
  },
};
</script>

<style>
.error-header {
  background-image: url("../assets/img/chevrolet-blazer.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>