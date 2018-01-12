<template>
    <div class="MsgList">
      <div class="List" v-for="(item,index) in List" @click="GoList(item.id)" >
        <v-touch @swipeleft="onSwipeLeft(index)" @swiperight="onSwipeRight(index)" :class="{'translate-left':indexO === index}">
        <div class="left-icon"><img :src="item.img" alt=""></div>
        <div class="content">
          <div class="title" v-text="item.name">昵称</div>
          <div class="msg" v-text="item.content">聊天内容</div>
        </div>
        <div class="right-icon">
          <div class="time" v-text="item.date">上午{{parseInt(Math.random()*12)}}:00</div>
          <div class="right-msg" v-text="item.Unread" >99+</div>
        </div>
          <div class="clear" v-if="indexO === index" @click.stop="select(index)" >删除</div>
        </v-touch>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        List:[],
        indexO:''
      }
    },
    computed:{
      ...mapState(['title'])
      },
    methods:{
      GetList(){
        this.$http.get('/api/list')
          .then((res)=>{
            this.List = res.data.data;
          })
      },
      Intercept(){
        this.$http.interceptors.request.use((req)=> {
          console.log('开始请求')
          console.log(`请求地址: ${req.url}`)
          return req
        }, function (error) {
          console.log('请求失败')
          return Promise.reject(error)
        });
        this.$http.interceptors.response.use((res)=> {
          console.log('接收成功')
          return res
        }, function (error) {
          console.log('接收失败')
          return Promise.reject(error)
        });
      },
      GoList(id){
        this.$router.push({
          name:'list',
          params:{
            "id":id
          }
        })
      },
      onSwipeLeft(i){
        this.indexO = i
      },
      onSwipeRight(){
        this.indexO = ''
      },
      select(i){
        this.List.splice(i,1);
        this.indexO = ''
      }
    },
    created(){
      this.Intercept(); //axios全局拦截器 可用来使用loading状态
      this.GetList(); //请求消息列表
    }
   }
</script>

<style scoped>
  .MsgList{
    background: #fff;
  }
  .List{
    height: 1.2rem;
    padding: 0 0.2rem;
    border-bottom: 0.02rem solid #ebebeb;
    /*display: flex;*/
    width: 100%;
    align-items: center;
    background: #fff;
  }
  .List>div{
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;
  }
  .right-icon{
    display: inline-block;
    flex: 1;
    text-align: right;
  }
  .left-icon{

    flex: 1;
  }
  .left-icon img{
    height: 0.8rem;
    margin-top: 0.2rem;
    border-radius: 0.5rem;
  }
  .content{
    display: inline-block;
    flex: 4;
    /*text-indent: 1em;*/
  }
  .content .msg{
    color: #ccc;
    font-size: 0.28rem;
    margin-top: 2%;
  }
  .time{
    color: #ccc;
    font-size: 0.25rem;
    margin-top: 2%;
  }
  .right-msg{
    background: #7EC0EE;
    color: #fff;
    font-size: 0.2rem;
    /*padding: 0.05rem;*/
    display: inline-block;
    border-radius: 0.15rem;
    text-align: center;
    width: 0.4rem;
    height: 0.3rem;
    line-height: 0.3rem;
  }
  .clear{
    background:#007aff ;
    flex: 1;
    text-align: center;
    line-height: 1.2rem;
    color: #fff;
  }
  .translate-left{
    -webkit-transform: translate(-1%, 0);
    -webkit-transition: all 0.3s linear;
  }
</style>
