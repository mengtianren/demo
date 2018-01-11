<template>
    <div>
      <msg-head></msg-head>
      <div class="msgTitle" >
          <div class="msglist" v-for="item in ListMsg" >
            <span class="content">
              <span class="item" v-text="item"></span>
              <span class="icon"></span>
            </span>
            <div class="rightIcon"><img src="../../static/img/icon/tou.jpg" alt=""></div>
          </div>
      </div>
      <div class="footTab">
        <div class="footOne">
          <input type="text" placeholder="请输入内容" v-model="msg" @click="HideS()" > <span @click="Send" >发送</span>
        </div>
        <div class="footTwo">
          <i class="iconfont icon-huatong" @click="Sund"></i>
          <i class="iconfont icon-tupian" @click="Camera" ></i>
          <i class="iconfont icon-lnicon12"></i>
          <i class="iconfont icon-xiaolvdashiicon02-copy-copy" @click="Shake"></i>
          <i class="iconfont icon-hongbao"></i>
          <i class="iconfont icon-gif"></i>
          <i class="iconfont icon-xiaolian"></i>
          <i class="iconfont icon-yuanjia"></i>
        </div>
        <div class="Sound" v-show="SoundParent">
          <i class="iconfont icon-huatong" v-show="SoundShow" ></i>
          <i class="iconfont icon-add" v-show="ImageShow"></i>
        </div>
      </div>
    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
  import MsgHead from '../model/MsgHead'
  export default {
    name: "shore",
    data(){
      return {
        msg:'',
        ListMsg:[],
        SoundParent:false, //总控制显示
        SoundShow:false,
        ImageShow:false
      }
    },
    methods:{
      ...mapMutations(['setTitle']),
      Send(){
        this.ListMsg.push(this.msg);
        this.msg = ''
      },
      Sund(){  //录音
        this.SoundShow = false; //先隐藏所有
        this.ImageShow = false;
        this.SoundParent = !this.SoundParent;
        this.SoundShow = !this.SoundShow;
      },
      Shake(){ //抖一抖
        this.ListMsg.push('抖一抖');
      },
      Camera(){
        this.SoundShow = false; //先隐藏所有
        this.ImageShow = false;
        this.SoundParent = !this.SoundParent;
        this.ImageShow = !this.ImageShow;
      },
      HideS(){
        this.SoundShow = false; //先隐藏所有
        this.ImageShow = false;
        this.SoundParent = false;
      }
    },
    components:{
      MsgHead
    }
    }
</script>

<style scoped>
.msgTitle{
position:absolute;
  top: 0.88rem;
  left: 0;
  right: 0;
  bottom: 1.2rem;
  background: #ebebeb;
  overflow: auto;
}
  .footTab{
    /*height: 1.2rem;*/
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    background: #ebebeb;
  }
  .footOne{
    width: 100%;
    height: 0.6rem;
    display: flex;

  }
  .footOne input{
    flex: 5;
    height: 100%;
    list-style: none;
    border: none;
    outline:none;
    font-size: 0.28rem;
    margin: 0 0.1rem;
    text-indent: 1em;
  }
  .footOne span{
    flex: 1;
    background: #ccc;
    line-height: 0.6rem;
    text-align: center;
    color: #333;
    /*margin-left: 0.1rem;*/
    border-radius: 0.07rem;
    font-size: 0.28rem;
    margin: 0 0.1rem;
  }
  .footTwo{
    width: 100%;
    line-height: 0.6rem;
    text-align: center;
    display: flex;
  }
  .footTwo i{
    flex: 1;
    color: #333;
  }
  .msglist{
    width: 100%;
    display: flex;
    padding: 0 0.2rem;
    text-align: right;
    margin-bottom: 0.2rem;
    /*align-items: center;*/
  }
  .msglist .content{
    flex: 4;
    position: relative;
    padding-top: 0.2rem;
  }
  .msglist img{
    height: 0.8rem;
    border-radius: 0.4rem;
    margin: 0.1rem 0;
    flex: 1;
  }
  .item{
    display: inline-block;
    width: auto;
    /*height: auto;*/
    background: #ffffff;
    padding: 0.1rem;
    text-align: left;
    border-radius: 0.2rem;
    margin-right: 0.2rem;
    font-size: 0.3rem;
  }
  .icon{
    width: 0;
    height: 0;
    display: inline-block;
    border-top: 0.1rem solid transparent;
    border-bottom: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    border-left: 0.1rem solid #fff;
    position: absolute;
    top: 0.4rem;
    right:-0.001rem;
  }
  .Sound{
    height: 4rem;
    width: 100%;
    background: #fff;
    text-align: center;
    line-height: 4rem;
  }
  .Sound i{
    font-size: 1rem;
    color: #7EC0EE;
  }
</style>
