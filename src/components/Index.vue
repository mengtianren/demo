<template>
    <div class="index">
    index
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "index",
    data(){
      return{

      }
    },
    methods:{
      ...mapMutations(['setTitle'])
    },
    beforeMount(){
      this.setTitle('首页')
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
  img[lazy=error]{
    /*background: #000;*/
  }
</style>
