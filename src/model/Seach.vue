<template>
    <div class="Seach">
      <input type="text" placeholder="搜索" >
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['title'])
      },
   }
</script>

<style scoped>
.Seach{
  height: 0.66rem;
  width: 100%;
  /*line-height: 0.66rem;*/
  background: #fff;
  text-align: center;
  border-bottom: 1px solid #ebebeb;
}
.Seach input{
  width: 98%;
  height: 80%;
  margin-top: 0.06rem;
  list-style: none;
  border: none;
  outline:none;
  text-align: center;
  background: rgba(0,0,0,.1);
  border-radius: 0.22rem;
  font-size: 0.3rem;
}
</style>
