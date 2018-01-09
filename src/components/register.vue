<template>
  <div class="login">
    <div class="login_model">
      <input type="number" class="input" placeholder="请输入手机号" v-model="phone" >
      <input type="password" class="input" placeholder="请输入密码" v-model="password" >
      <input type="button" class="input_button" value="注册" @click="register()" >
      <router-link to="login"><span class="right_icon">去登录</span></router-link>
    </div>
  </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  export default {
    name: "login",
    data(){
      return{
        phone:'',
        password:''
      }
    },
    methods:{
      ...mapMutations(['setTitle']),
      register(){
        console.log(this.phone.length,isNaN(this.phone))
        if(this.phone.length!=11||isNaN(this.phone)){
          alert('请输入正确的手机号')
          return
        }
        if(!this.password||this.password.length<=0){
          alert('请输入您要注册的密码')
          return
        }
        this.$http.post('/api/login/createAccount',{params:{phone:this.phone,password:this.password}})
          .then((info)=>{
            if(!info.data.error){
              this.$router.push({path:'/login'})
            }else{
              alert(info.data.data)
            }

            console.log(info.data.data)
          })
      }
    },
    beforeMount(){
      this.setTitle('注册');
    },
    created(){

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
    border-radius: 5px;
    text-align: center;
  }
  .login_model .input{
    height: 25px;
    width: 80%;
    margin: 10px auto;
    border-bottom: 1px solid #ebebeb;
  }

  .login_model .input_button{
    height: 40px;
    width: 80%;
    background: #0099FF;
    color: #fff;
    margin-top: 10%;
    margin-bottom: 5%;
  }
  .right_icon{
    display: block;
    text-align: right;
    margin-right: 10%;
    color: #0099FF;
    margin-bottom: 5%;
  }
</style>
