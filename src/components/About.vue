<template>
    <div class="login">
      <ul>
        <li v-for="i in 31" @click="routerPush(i)">
          <img v-lazy="'../static/img/'+i+'.png'">
          <p class="content">
            <span class="title">这是第{{i}}张图片</span>
            <span class="content" >这是第{{i}}张图片的介绍这是第{{i}}张图片的介绍这是第{{i}}张图片的介绍这是第{{i}}张图片的介绍这是第{{i}}张图片的介绍</span>
          </p>

        </li>
      </ul>
    </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
    export default {
        name: "login",
      computed:{
        ...mapState(['number','user_session'])
      },
      methods:{
        ...mapMutations(['setTitle']),
        routerPush(i){
          this.$router.push({
            name:'aboutdetail',
            params:{id:i}
          })
        }
      },
      beforeMount(){
          this.setTitle('此页面只有登录后才能进入')
      }
    }
</script>

<style scoped>
ul{
  list-style: none;
  margin: 0 2%;
}
  li{
    display: block;
    height: 104px;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    align-items: center;
  }
  li img{
    height: 80%;
    /*height: 50px;*/

  }
  .content{
    display: inline-block;
    margin-left: 2%;
    width: 90%;
  }
  .content span{
    display: block;
  }
  .content .title{
    /*font-size: 1.3rem;*/
    margin-bottom: 10px;
  }
  .content .content{
    font-size: 0.8rem;
    color: #ccc;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: 0;
  }
</style>
