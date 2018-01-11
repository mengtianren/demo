<template>
    <div class="index">
      <tab  />
      <Seach />
      <msg-list />
      <swipe />
    </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import Seach from '../model/Seach'
  import MsgList from '../model/MsgList'
  import Tab from '../model/Tab'
  import Swipe from '../model/swipe'

  export default {
    name: "index",
    components:{
      Seach,
      MsgList,
      Tab,
      Swipe
    },
    methods:{
      ...mapMutations(['setTitle'])
    },
    beforeMount(){
      this.setTitle('消息');
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

</style>
