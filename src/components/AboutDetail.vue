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
  padding: 22px;
}
.title{
  /*font-size: 1.3rem;*/
  margin-bottom: 10px;
  /*border-bottom: 1px solid #ebebeb;*/
  height: 44px;
  line-height: 44px;
}
.content{
  font-size: 0.8rem;
  color: #ccc;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  border: 1px solid #ebebeb;
  margin: 0;
  padding: 10px;
}
  img{
    width: 50%;
  }
</style>
