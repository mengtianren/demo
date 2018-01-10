<template>
  <!--<div class="login">-->
    <div class="login_model">
      <input type="number" class="input" placeholder="请输入手机号" v-model="phone" >
      <input type="password" class="input" placeholder="请输入密码" v-model="password" >
      <input type="button" class="input_button" value="登录" @click="login()" >
      <router-link to="register"><span class="right_icon">没有账号？去注册</span></router-link>
    </div>

</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  export default {
    // name: "login",
    data(){
      return{
        phone:'',
        password:''
      }
    },
    methods:{
      ...mapMutations(['setTitle']),
      login(){
          if(this.phone.length!=11||isNaN(this.phone)){
            alert('请输入正确的手机号')
            return
          }else if(!this.password||this.password.length<=0){
            alert('请输入您的密码')
            return
          }
          this.$http.post('/app/login/getAccount',{params:{phone:this.phone,password:this.password}})
            .then((info)=>{
              console.log(info.data)
              if(!info.data.error){
                this.$cookies.set('phone',info.data.phone,60 * 60 * 24);
                this.$router.push({path:'/'})
              }else{
                alert(info.data.data)
              }
            }).catch((error)=>{
              console.log(error)
          })
      }
    }
  }
</script>

<style scoped>

  input{
    background:none;
    outline:none;
    border:0px;
  }
  .login_model{
    width: 80%;
    height: 40%;
    border: 1px solid #ebebeb;
    margin: 10% auto;
    border-radius: 0.1rem;
    text-align: center;
  }
  .login_model .input{
    height: 0.5rem;
    width: 80%;
    margin: 0.2rem auto;
    border-bottom: 1px solid #ebebeb;
    font-size: 0.3rem;
  }

  .login_model .input_button{
    height:0.8rem;
    width: 80%;
    background: #0099FF;
    color: #fff;
    margin-top: 10%;
    margin-bottom: 5%;
    font-size: 0.3rem;
  }
  .right_icon{
    display: block;
    text-align: right;
    margin-right: 10%;
    color: #0099FF;
    margin-bottom: 5%;
    font-size: 0.3rem;
  }
</style>
