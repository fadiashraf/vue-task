<template>
  <footer class="padding_h py-3 d-flex justify-content-between flex-wrap">
    <!-- Copyright -->
    <div class="text-center">All rights reserved.Copyright © 2021</div>
    <!-- Copyright -->

    <!-- links -->
    <nav class="links">
      <router-link class="px-3" to="/about">Sitemap</router-link>
      <router-link class="px-3" to="/about">Terms and conditions</router-link>
      <router-link class="px-3" to="/about">Privacy</router-link>
      <router-link class="px-3" to="/about">Help</router-link>
    </nav>
    <!-- links -->
  </footer>
</template>
<script>
export default {
  name: "AppFooter",
  mounted() {},
};
</script>
<style scoped>
footer, .links a {
  color: #ffffff;
  font-family: "Roboto", scans-serif;
  background-color: #000000;
}
footer .links a {
  text-decoration: underline;
}
@media only screen and (max-width: 768px) {
  footer *{
    text-align: center;
    display: block;
    width: 100%;
  }
}
</style>