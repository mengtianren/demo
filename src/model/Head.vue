<template>
    <div class="Head">
      <span class="right-icon" @click="ShowTab" ><i class="iconfont icon-add"></i></span>
      <span class="left-icon">  <img src="../../static/img/icon/tou.jpg" alt=""></span>
      <span v-text="title"></span>
    </div>
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    computed:{
      ...mapState(['title'])
      },
    methods:{
      ...mapMutations(['ShowTab'])
    }
   }
</script>

<style scoped>
.Head{
  height: 0.88rem;
  width: 100%;
  color: #7EC0EE;
  line-height: 0.88rem;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 0.2rem;
}
  .right-icon{
    float: right;
    line-height: 0.88rem;
  }
  .left-icon{
    float: left;
  }
  .left-icon img{
    width: 0.66rem;
    margin-top: 0.11rem;
    border-radius: 0.33rem;
  }
</style>
