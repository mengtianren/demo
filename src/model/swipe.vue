<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="bannerItem in imgList">
        <img :src="bannerItem" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
  import '../../static/css/swiper.min.css'
  import '../../static/js/swiper.min'
  export default {
    data(){
      return {
        imgList:['../../static/img/swipe_1.jpg','../../static/img/swipe_2.jpg','../../static/img/swipe_3.jpg']
      }
    },
    created(){
      setTimeout(() => {
        const swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          spaceBetween: 3000,
          autoplay: 1500,
          effect: 'fade',
        });

      }, 200);
    }
   }
</script>

<style scoped>

 .swiper-slide {
   width: 100% !important;
 }
  .swiper-slide img{
    width: 100% ;
  }
</style>
