<template>
  <div class="banner">
    <img src="../../assets/MainImg.png" alt="banner img" />
    <div class="padding_h gradient row d-flex align-items-center">
      <div class=" col-md-5">
        <div class="title">What it's like to travel to Hawaii right now</div>
        <div class="sub-title">Free flights to remote workers</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBanner",
};
</script>
<style scoped>
.banner {
  position: relative;
  color: #ffffff;
}

.gradient {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to right, black, transparent);
  opacity: 0.9;
}
.banner img {
  width: 100%;
  height: auto;
  z-index: -1;
}
.title {
  /* width: 35%; */
  font-size: calc(14px + (60 - 14) * ((100vw - 300px) / (1600 - 300)));

  font-family: "Ibarra Real Nova", serif;
  line-height: 5vw;
}
.sub-title {
  /* width: 35%; */
  font-size: calc(10px + (26 - 10) * ((100vw - 300px) / (1600 - 300)));
  font-family: "Segoe UI", sans-serif;
  margin-top: 1.5vw;
  padding-top: 1.5vw;
  border-top: 2px solid rgba(137, 137, 134, 0.7);
}
</style>