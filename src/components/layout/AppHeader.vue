<template>
  <ul id="myNavbar" class="nav nav-fill sticky-top">
    <li class="nav-item">
      <a class="nav-link" href="#section1">Section 1</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#section2">Section 2</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#section3">Section 3</a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "AppHeader",
  mounted() {
    var $ = global.$;
    // Add smooth scrolling on all links inside the navbar
    $("#myNavbar a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;

        //fix scroll position
        let navHeight = document.getElementById("myNavbar").offsetHeight;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top - navHeight,
          },
          800
        );
      } // End if
    });
  },
};
</script>
<style scoped>
#myNavbar{
  background-color: white;
  border-radius: 0;
  border: 0;
  border-bottom: 1px solid #eaeaea;

}
.nav-link {
  font-family: "Roboto", scans-serif;
  padding: 2vw 1vw;
  font-size: calc(10px + (18 - 10) * ((100vw - 300px) / (1600 - 300)));
  color: #707070;
  
  
}
.nav-link.active {
  color: #0a527b;
  background-color: white;
  border-bottom: 3px solid #0a527b;
}
</style>