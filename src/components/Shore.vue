<template>
    <div>
      暂时没想好要写什么;
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "shore",
    methods:{
      ...mapMutations(['setTitle'])
    },
    beforeMount(){
      this.setTitle('未知')
    },
    }
</script>

<style scoped>

</style>
