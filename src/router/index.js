import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import newList from '@/page/newList/newList'
import registerLogin from '@/page/registerLogin/registerLogin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/new/:id',
      name: 'hasSearchList',
      component: newList
    },
    {
      path: '/join',
      component: registerLogin
    }
  ]
})
