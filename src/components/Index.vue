<template>
    <div class="index">
      <!-- Swiper -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="bannerItem in imgList">
            <img :src="bannerItem" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import '../../static/css/swiper.min.css'
  import '../../static/js/swiper.min'
  export default {
    name: "index",
    data(){
      return{
      imgList:['../../static/img/swipe_1.jpg','../../static/img/swipe_2.jpg','../../static/img/swipe_3.jpg']
      }
    },
    methods:{
      ...mapMutations(['setTitle'])
    },
    beforeMount(){
      this.setTitle('首页');
      setTimeout(() => {
        const swiper = new Swiper('.swiper-container', {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          spaceBetween: 30,
          autoplay: 1500,
          effect: 'fade',
        });

      }, 200);
    }
  }
</script>

<style scoped>
  ul,li{
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li{
    float: left;
  }
img{
  width: 100%;
}

</style>
