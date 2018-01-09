<template>
  <div class="foot">
    <router-link to="/index">首页</router-link>
    <router-link to="/shore">未知</router-link>
    <router-link to="/about">关于</router-link>
    <router-link to="/User">个人中心</router-link>
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
    height: 0.88rem;
    line-height: 0.88rem;
    display: flex;
    border-top: 1px solid #ebebeb;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
  }
  .foot a{
    flex: 1;
    text-align: center;
  }
  .router-link-exact-active.router-link-active{
    color:#0099FF
  }
</style>
