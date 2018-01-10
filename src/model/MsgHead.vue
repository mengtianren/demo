<template>
    <div class="Head">
      <span class="left-icon" @click="goHistory" ><span></span>消息({{parseInt(Math.random()*100)}})</span>
      <span class="content" > 姓名</span>
      <span class="right-icon" @click="ShowTab" ><i class="iconfont icon-xiaolvdashiicon02-copy-copy"></i></span>
      <span class="right-icon" @click="ShowTab" ><i class="iconfont icon-shuangren"></i></span>
    </div>
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    computed:{
      ...mapState(['title'])
      },
    methods:{
      ...mapMutations(['ShowTab']),
      goHistory(){
        this.$router.go(-1)
      }
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
  padding: 0 0.2rem 0 0;
  display: flex;
}
  .right-icon{
   flex: 0.5;
  }
  .left-icon{
   flex: 1.1;
  }
  .left-icon span{
    display: inline-block;
    width: 0.25rem;
    height: 0.25rem;
    border-left: 0.02rem solid #7EC0EE;
    border-top: 0.02rem solid #7EC0EE;
    transform: rotate(-45deg);
  }
.content{
  flex: 2;
}
</style>
