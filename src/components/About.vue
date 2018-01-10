<template>
    <div class="about">
      <ul v-scroll:throttle="{fn: onScroll, throttle: 800 }">
        <li v-for="i in msg" @click="routerPush(i)"
        >
          <img v-lazy="'../static/img/'+i+'.png'">
          <p class="content">
            <span class="title">这是第{{i}}张图片</span>
            <span class="content" >这是第{{i}}张图片的介绍这是第{{i}}张图片的介绍这是第{{i}}张图片的介绍这是第{{i}}张图片的介绍这是第{{i}}张图片的介绍</span>
          </p>
        </li>
        <span class="loading" v-if="loading">{{loading}}</span>
      </ul>

    </div>
</template>

<script>
  import {mapMutations} from 'vuex'
    export default {
        name: "about",
      data(){
        return {
          msg:10,
          loading:'',
          position: {scrollTop: 0, scrollLeft: 0}
        }
      },
      methods:{
        ...mapMutations(['setTitle']),
        routerPush(i){
          this.$router.push({
            name:'aboutdetail',
            params:{id:i}
          })
        },
        onScroll(e,position){
          this.position = position;
          console.log(position)
          if(this.msg<50){
            this.loading = '正在加载中' ;
              this.msg +=10;
          }else if(this.msg>=50){
            if( this.loading == '正在加载中'){
              this.loading = '暂无更多数据';
            }
            if(position.scrollTop>=4600){
              setTimeout(()=>{
                this.loading = ''
              },3000)
            }
            return
          }
        }
      },
      beforeMount(){
          this.setTitle('动态')
      }
    }
</script>

<style scoped>
ul{
  list-style: none;
  margin: 0 2%;
}
  li{
    display: block;
    height: 2.08rem;
    border-bottom: 1px solid #ebebeb;
    display: flex;
    align-items: center;
  }
  li img{
    height: 80%;
    /*height: 50px;*/

  }
  .content{
    display: inline-block;
    margin-left: 2%;
    width: 90%;
  }
  .content span{
    display: block;
  }
  .content .title{
    /*font-size: 1.3rem;*/
    margin-bottom: 0.2rem;
  }
  .content .content{
    font-size: 0.3rem;
    color: #ccc;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    margin: 0;
  }
.about ul {
  width: 100%;
  /*height: 500px;*/
  padding: 0;
  margin: 0;
  overflow: auto;
  /*height:-moz-calc(80% - 100px);*/
  /*height:-webkit-calc(80% - 100px);*/
  /*height: calc(80% - 100px);*/
  position: absolute;
  top: 0.88rem;
  left: 0;
  right: 0;
  bottom: 0.88rem;

}
  .loading{
    display: block;
    text-align: center;
    height: 0.88rem;
    line-height: 0.88rem;
  }
</style>
