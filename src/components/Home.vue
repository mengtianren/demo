<template>
  <div class="hello">
    <head-title></head-title>
    <router-view></router-view>
  <foot></foot>
  </div>
</template>

<script>
  import HeadTitle from '../model/Head'
  import Foot from '../model/Foot'

export default {

  components:{
    HeadTitle,Foot
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.hello{
  padding: 44px 0;
}
</style>
