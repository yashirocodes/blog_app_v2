<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-8 mx-auto">
          <ul class="list-inline text-center">
            <li class="list-inline-item">
              <a href="#">
                <font-awesome-icon
                  class="fs-3 mx-3"
                  :icon="['fab', 'facebook']"
                />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <font-awesome-icon
                  class="fs-3 mx-3"
                  :icon="['fab', 'twitter']"
                />
              </a>
            </li>
            <li class="list-inline-item">
              <a href="#">
                <font-awesome-icon
                  class="fs-3 mx-3"
                  :icon="['fab', 'github']"
                />
              </a>
            </li>
          </ul>
          <p class="text-muted copyright">Copyright&nbsp;©&nbsp;V8 - 2018</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style>
</style>