import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Index from '@/components/Index'
import Login from '@/components/Login'
import About from '@/components/About'
import User from '@/components/User'
import register from '@/components/register'
import AboutDetail from '@/components/AboutDetail'
import Shore from '@/components/Shore'
import List from '@/components/List'
Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/',
      redirect:'/index',
      children: [
        {path: 'index',component: Index},
        {path: 'shore',component: Shore},
        {
         path: 'about', component: About,
         meta:{
          requireAuth: true
          }
        },
        {
          path: 'user',
          meta:{
            requireAuth: true
          },
          component: User},
      ],
      component: Home
    },
    {
     path:'/login',
     component:Login
    },
    {
      path: '/register',
      component: register
    },
    {
      path:'/aboutdetail/:id',
      name:'aboutdetail',
      meta:{
        requireAuth: true
      },
      component:AboutDetail
    },
    {
      path:'/list/:id',
      name:'list',
      component:List
    },
  ]
})
