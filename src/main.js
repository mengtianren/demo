// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import vuescroll from 'vue-scroll'
import App from './App'
import router from './router'
import axios from 'axios'
var VueTouch = require('vue-touch') ;
require('../Moke/mock')
import VueCookies from 'vue-cookies'
import VueLazyload from 'vue-lazyload'
import store from './vuex/index'

Vue.use(vuescroll, {debounce: 600}) ;
Vue.use(VueCookies) ;
Vue.use(VueTouch,{name:'v-touch'});

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/error.gif',
  loading: './static/loading.gif',
  attempt: 1
});
Vue.use(VueLazyload)
router.beforeEach((to,from,next)=>{
  // console.log(to,to.meta.requireAuth)
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    if ($cookies.get('phone')) {
      next();
    } else {
      next({
        path: '/login'
      })
    }
  }else{
    next()
  }
})

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
