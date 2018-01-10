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
      this.setTitle('联系人')
    },
    }
</script>

<style scoped>

</style>
