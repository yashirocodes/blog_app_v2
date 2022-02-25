<template>
  <!-- navbar -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="">V8</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Inicio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">Sobre Mí</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/contact">Contacto</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/post/1">Blog</router-link>
        </li>
      </ul>
    </div>
  </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'HelloWorld',
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
</style>
