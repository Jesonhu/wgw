import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import LpShow from '@/page/lpPicList/picList1'
import LpShowDetail from '@/page/lpPicList/children/detail'
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
      path: '/lpshow',
      component: LpShow,
      children: [
        {
          path: 'detail',
          name: 'fullPic',
          component: LpShowDetail
        }
      ]
    },
    {
      path: '/active',
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
