<template>
    <div class="Tab" v-if="TabShow" @click="ShowTab">
      <div class="TabPar">
        <span class="icon-top"></span>
      <div class="TabList">
        <div class="left-icon">icon</div>
        <div class="content">创建群聊</div>
      </div>
      <div class="TabList">
        <div class="left-icon">icon</div>
        <div class="content">创建群聊</div>
      </div>
      </div>
    </div>
</template>
<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    data(){
      return{

      }
    },
    computed:{
      ...mapState(['TabShow'])
      },
    methods:{
      ...mapMutations(['ShowTab'])
    }
   }
</script>

<style scoped>
  .Tab{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    /*bottom: 0;*/
}
  .TabPar{
    /*display: flex;*/
    width: 40%;
    padding: 0.2rem;
    position: absolute;
    top: 0.88rem;
    right: 0.2rem;
    background: #fff;
    text-align: left;
    font-size: 0.27rem;
    border-radius: 0.1rem;
  }
  .icon-top{
    width: 0;
    height: 0;
    border-left: 0.2rem solid transparent;
    border-right: 0.2rem solid transparent;
    border-bottom: 0.2rem solid #fff;
    position: absolute;
    top: -0.2rem;
    right: 0.25rem;
  }
  .TabList{
    display: flex;
    width: 100%;
  }
  .left-icon{
    flex: 2;
  }
  .content{
    flex: 3;
  }
</style>
