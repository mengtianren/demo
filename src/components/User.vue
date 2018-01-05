<template>
    <div class="User">
      手机号:{{$cookies.get('phone')}}
      <div class="footer">
        <input type="button" value="退出登录" class="input_button" @click="Clear()" >
      </div>
    </div>
</template>

<script>
  import{mapMutations} from 'vuex'
  export default {
    name: "User",
    data(){
      return{
      }
    },
    methods:{
      ...mapMutations(['setTitle']),
      Clear(){
        this.$cookies.remove('phone');
        this.$router.push({path:'/'})
      }
    },
    beforeMount(){
      this.setTitle('个人中心')
    }
  }
</script>

<style scoped>
  input{
    background:none;
    outline:none;
    border:0px;
  }
  .footer{
    width: 100%;
    position: fixed;
    bottom: 20%;
    left: 0;
    text-align: center;
  }
  .input_button{
    height: 40px;
    width: 80%;
    background: #0099FF;
    color: #fff;
  }
</style>
