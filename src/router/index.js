import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import newList from '@/page/newList/newList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new/:id',
      name: 'hasSearchList',
      component: newList
    }
  ]
})
