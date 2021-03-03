<template>
  <div id="section3" class="px-4">
    <loading :active.sync="isLoading"></loading>
    <h1 class="section-title text-center mb-5">Section 3</h1>
    <div class="thumb-container m-auto" v-if="!isError">
      <!-- swiper1 -->
      <swiper
        class="swiper gallery-top"
        :options="swiperOptionTop"
        ref="swiperTop"
      >
        <swiper-slide
          v-for="item in apiData"
          :key="item.id"
          v-bind:style="{ backgroundImage: 'url(' + item.url + ')' }"
        >
          <!-- <img :src="item.url" alt="item.title" />  -->
        </swiper-slide>
      </swiper>
      <!-- swiper2 Thumbs -->
      <swiper
        class="swiper gallery-thumbs"
        :options="swiperOptionThumbs"
        ref="swiperThumbs"
      >
        <swiper-slide
          v-for="item in apiData"
          :key="item.id"
          v-bind:style="{ backgroundImage: 'url(' + item.thumbnailUrl + ')' }"
        >
        </swiper-slide>
      </swiper>
    </div>
    <div v-if="isError" class="d-flex justify-content-center">
      <img class="img-fluid" src="../assets/error.jpg" alt="" />
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import { getData } from "../api/api-service";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

export default {
  name: "AppSectionThree",
  title: "Thumbs gallery with Two-way control",
  components: {
    Swiper,
    SwiperSlide,
    Loading,
  },
  directives: {
    swiper: directive,
  },
  data() {
    return {
      isLoading: true,
      isError: false,
      fullPage: true,
      apiData: Array,
      swiperOptionTop: {
        loop: true,
        loopedSlides: 4, // looped slides should be the same
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        autoplay: {
          delay: 2000,
        },
      },
      swiperOptionThumbs: {
        loop: true,
        loopedSlides: 4, // looped slides should be the same
        spaceBetween: 10,
        slidesPerView: "auto",
        touchRatio: 0.2,
        slideToClickedSlide: true,
      },
    };
  },
  async mounted() {
    /////////////////////////
    // get images from api //
    ////////////////////////

    try {
      let res = await getData();
      this.isLoading = false;
      // get only first 4 elements of the array data
      this.apiData = res.data.slice(0, 4);
    } catch (error) {
      this.isLoading = false;
      // variable that will show error message in case of errors
      this.isError = true;
    }

    this.$nextTick(() => {
      const swiperTop = this.$refs.swiperTop.$swiper;
      const swiperThumbs = this.$refs.swiperThumbs.$swiper;
      swiperTop.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiperTop;
    });
  },
};
</script>

<style lang="scss" scoped>
#section3 {
  background-color: #f8f8f8;
}
.swiper-container {
  width: 70% !important;
  margin-left: auto;
  margin-right: auto;
}
.swiper-slide {
  position: relative;
  height: 30vw;
  width: auto;
  background-size: cover;
  background-position: center;
  border-radius: 1vw;
}
.gallery-top {
  height: 80%;
  width: auto;
}
.gallery-thumbs {
  height: 20%;
  box-sizing: border-box;
  padding: 10px 0;
}
.gallery-thumbs .swiper-slide {
  width: 25%;
  // height: 5vh;
  height: 0;
  padding-top: 5vw;
  padding-bottom: 5vw;
  opacity: 0.4;
}
.gallery-thumbs .swiper-slide-active {
  opacity: 1;
}
</style>