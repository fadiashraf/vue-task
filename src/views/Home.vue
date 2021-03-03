<template>
  <div>
    <AppBanner />
    <AppHeader />
    <div class="padding_h" id="sections">
      <AppSectionOne class="section" />
      <AppSectionTwo class="section" v-bind:timeline_data="timeline_data" />
      <AppSectionThree class="section" />
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppSectionOne from "../components/AppSectionOne";
import AppSectionTwo from "../components/AppSectionTwo";
import AppSectionThree from "../components/AppSectionThree";
import AppBanner from "../components/layout/AppBanner.vue";
import AppHeader from "../components/layout/AppHeader.vue";
import AppFooter from "../components/layout/AppFooter.vue";
import json from "../fake_data.json";

export default {
  name: "Home",
  components: {
    AppBanner,
    AppHeader,
    AppSectionOne,
    AppSectionTwo,
    AppSectionThree,
    AppFooter,
  },
  data() {
    return { timeline_data: json.timeline };
  },
  mounted() { },
};
</script>
<style>
#sections {
  background-color: #f8f8f8;
}
.section {
  padding: 3.75rem 0;
  border-bottom: 2px solid #eaeaea;
}
.section:last-child {
  border: 0;
}
.section-title {
  font-family: "Merriweather", serif;
  font-size: calc(22px + (34 - 22) * ((100vw - 300px) / (1600 - 300)));
}

@media only screen and (max-width: 600px) {
  .section-title {
    margin-top: 16px;
  }
}
</style>