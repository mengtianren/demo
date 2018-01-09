<template>
    <div class="detail">
      <img v-lazy="'../static/img/'+ImgId+'.png'">
      <p class="title">这是第{{ImgId}}张图片的详情标题</p>
      <p class="content">这是第{{ImgId}}张图片的介绍，这是第{{ImgId}}张图片的介绍，这是第{{ImgId}}张图片的介绍，这是第{{ImgId}}张图片的介绍，这是第{{ImgId}}张图片的介绍。</p>
    </div>
</template>

<script>
    export default {
      name: "about-detail",
      data(){
        return{
          ImgId:this.$route.params.id
        }
      }
    }
</script>

<style scoped>
.detail{
  text-align: center;
  /*padding:0.44rem;*/
}
.title{
  /*font-size: 1.3rem;*/
  margin-bottom: 0.2rem;
  /*border-bottom: 1px solid #ebebeb;*/
  height:0.88rem;
  line-height: 0.88rem;
}
.content{
  font-size: 0.3rem;
  color: #ccc;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  border: 1px solid #ebebeb;
  margin: 0;
  padding: 0.2rem;
}
  img{
    width: 50%;
  }
</style>
