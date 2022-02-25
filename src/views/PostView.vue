<template>
  <div class="post">
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FooterPage from "@/components/FooterPage.vue";

export default {
  name: "PostView",
  components: {
    HelloWorld,
    FooterPage,
  },
};
</script>
<style>
.post-header {
  background-image: url("../assets/img/post-sample-image.jpg");
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
