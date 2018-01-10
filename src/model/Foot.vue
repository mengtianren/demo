<template>
  <div class="foot">
    <router-link to="/index"><i class="iconfont icon-xiaoxi"></i><p>消息</p></router-link>
    <router-link to="/shore"><i class="iconfont icon-home"></i><p>联系人</p></router-link>
    <router-link to="/about"><i class="iconfont icon-xing"></i><p>动态</p></router-link>
    <!--<router-link to="/User">个人中心</router-link>-->
  </div>
</template>

<script>
    export default {
        name: "foot"
    }
</script>

<style scoped>
  .foot{
    width: 100%;
    height: 1rem;
    /*line-height: 0.88rem;*/
    display: flex;
    border-top: 1px solid #ebebeb;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 0.1rem 0;
    font-size: 0.32rem;
  }
  .foot a{
    flex: 1;
    text-align: center;
    height: 0.88rem;
  }
  .foot p{
    /*display: inline-block;*/
    font-size: 0.27rem;
  }
  .router-link-exact-active.router-link-active{
    color:#0099FF
  }
</style>
