<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import '../static/js/rem'
  import '../static/css/iconfont.css'
export default {
  name: 'app'
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration:none;
    box-sizing: border-box;
  }
  body{
    font-size: 0.32rem;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /*margin-top: 60px;*/
  padding: 0.88rem 0;
}
 a{
   color:#ccc
 }
</style>
