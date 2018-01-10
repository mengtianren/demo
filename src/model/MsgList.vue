<template>
    <div class="MsgList">
      <div class="List" v-for="item in List" @click="GoList(item.id)" >
        <div class="left-icon"><img :src="item.img" alt=""></div>
        <div class="content">
          <div class="title" v-text="item.name">昵称</div>
          <div class="msg" v-text="item.content">聊天内容</div>
        </div>
        <div class="right-icon">
          <div class="time" v-text="item.date">上午{{parseInt(Math.random()*12)}}:00</div>
          <div class="right-msg" v-text="item.Unread" >99+</div>
        </div>
      </div>
    </div>
</template>
<script>
  import {mapState} from 'vuex'
  export default {
    data(){
      return{
        List:[]
      }
    },
    computed:{
      ...mapState(['title'])
      },
    methods:{
      GoList(id){
        this.$router.push({
          name:'list',
          params:{
            "id":id
          }
        })
      }
    },
    created(){
      this.$http.get('/api/list')
        .then((res)=>{
        this.List = res.data.data;
          console.log(this.List)
        })

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
    display: flex;
    width: 100%;
    align-items: center;
    background: #fff;
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
</style>
