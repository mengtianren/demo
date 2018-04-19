<template>
  <!-- Swiper -->
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="bannerItem in imgList">
        <img :src="bannerItem.url" />
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
        imgList:[]
      }
    },
    methods:{
      gitDate(){
        this.$http.get('/api/v1/home/carousel')
          .then(info =>{
            this.imgList = info.data.data
            console.log(this.imgList)
          }).catch(error =>{
            console.log(error)
        })
      }
    },
    created(){
      setTimeout(() => {

      }, 200);

    },
    mounted(){
      this.gitDate();
      const swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 3000,
        autoplay: 1500,
        effect: 'fade',
      });
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
