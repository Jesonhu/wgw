import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import newList from '@/page/newList/newList'
import newDetail from '@/page/newDetail/newDetail'
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
      path: '/active',
      name: 'hasSearchList',
      component: newList,
      children: [
        {
          path: 'detail',
          name: 'activeDetail',
          component: newDetail
        }
      ]
    },
    {
      path: '/join',
      component: registerLogin
    }
  ]
})
