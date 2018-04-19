<template>
  <!--<div class="login">-->
    <div class="login_model">
      <input type="number" class="input" placeholder="请输入手机号" v-model="form.phone" >
      <input type="password" class="input" placeholder="请输入密码" v-model="form.password" >
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
        form:{}
      }
    },
    methods:{
      ...mapMutations(['setTitle']),
      login(){
          if(this.form.phone.length!=11||isNaN(this.form.phone)){
            alert('请输入正确的手机号')
            return
          }else if(!this.form.password||this.form.password.length<=0){
            alert('请输入您的密码')
            return
          }
          let form = this.form
          this.$http.post('/api/v1/user/login',{params:form})
            .then((info)=>{
                console.log(info)
              if(info.data.code){
                  this.$router.push('/')
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
