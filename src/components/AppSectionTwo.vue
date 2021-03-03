<template>
  <div id="section2">
    <h1 class="section-title">Section 2</h1>
    <div class="mt-5">
      <div
        v-for="(item, index) in timeline_data"
        :key="index"
        class="timeline"
        v-bind:id="'item-' + index"
        v-bind:isVisible="index==0?true:false"
      >
        <i class="circle fas fa-circle"></i>
        <i class="active-circle far fa-dot-circle" v-show="index==0?true:false"></i>
        <h2 class="title" @click="toggle('item-' + index)">
          {{ item.title || "Empty Title" }}

          <i>
            <img class="arrow" src="../assets/Arrow1.svg" />
          </i>
        </h2>
        <div class="content" v-show="index==0?true:false">
          {{ item.content || "Empty Content" }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppSectionTwo",
  data() {
    return {};
  },
  props: { timeline_data: Array },
  mounted() {},
  methods: {
    // toggle content details when pressing on title
    toggle(id) {
      let item = document.querySelector("#" + id);
      // convert to bolean
      let isVisible = item.getAttribute("isVisible") == "true" ? true : false;
      item.setAttribute("isVisible", !isVisible);

      // make content hidden
      if (isVisible) {
        document.querySelector("#" + id + " .content").style.display = "none";
        document.querySelector("#" + id + " .title").style.fontSize =
          "  calc(14px + (40 - 14) * ((100vw - 300px) / (1600 - 300)))";
        document.querySelector("#" + id + " .arrow").style.display =
          "inline-block";
        document.querySelector("#" + id + " .active-circle").style.display =
          "none";
        document.querySelector("#" + id + " .circle").style.display = "block";
      } else {
        // make content shown
        document.querySelector("#" + id + " .title").style.fontSize = "calc(35px + (70 - 35) * ((100vw - 300px) / (1600 - 300)))";
        document.querySelector("#" + id + " .content").style.display = "block";
        document.querySelector("#" + id + " .arrow").style.display = "none";
        document.querySelector("#" + id + " .active-circle").style.display =
          "block";
        document.querySelector("#" + id + " .circle").style.display = "none";
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.timeline {
  padding: 0rem 1rem 3rem 1.5rem;
  position: relative;
  border-left: 1px solid #e7e7e7;
}

.timeline:last-child {
  border: 0px;
}

/* title of timeline */
.title {
  cursor: pointer;
  font-size: calc(14px + (40 - 14) * ((100vw - 300px) / (1600 - 300)));
  color: #0a527b;
  font-family: "Merriweather", serif;
  line-height: 1rem;
  margin-bottom: 1rem;
}
.circle {
  position: absolute;
  color: #a3a3a3;
  left: -0.25rem;
  z-index: 3;
  font-size: 0.5rem;
}
.active-circle {
  position: absolute;
  color: #0a527b;
  left: -0.65rem;
  background-color: white;
  z-index: 5;
  font-size: 1.25rem
}
.content {
  margin-top: 2rem;
  color:#0C0C0C;
  font-family: "Roboto", scans-serif;
  padding-top: 1vw;

}
</style>
