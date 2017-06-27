import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import LpShow from '@/page/lpPicList/picList1'
import LpShowDetail from '@/page/lpPicList/children/detail'
import NewList from '@/page/newList/newList'
import NewDetail from '@/page/newDetail/newDetail'
import HxType from '@/page/hxPicList/hxPicList'
import Map from '@/page/map/map'
import RegisterLogin from '@/page/registerLogin/registerLogin'

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
        // {
        //   path: 'detail',
        //   name: 'fullPic',
        //   component: LpShowDetail
        // }
      ]
    },
    {
      path: '/lpshow/detail',
      name: 'fullPic',
      component: LpShowDetail
    },
    {
      path: '/active',
      component: NewList,
      children: [
        {
          path: 'detail',
          name: 'activeDetail',
          component: NewDetail
        }
      ]
    },
    {
      path: '/hxtype',
      component: HxType
    },
    {
      path: '/hxstype/detail'
    },
    {
      path: '/map',
      component: Map
    },
    {
      path: '/join',
      component: RegisterLogin
    }
  ]
})
