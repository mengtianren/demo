<template>
    <div class="Head" v-text="title"></div>
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
.Head{
  height: 0.88rem;
  width: 100%;
  line-height: 0.88rem;
  background: #fff;
  border-bottom: 1px solid #ebebeb;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
