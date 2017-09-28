import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import LpShow from '@/page/lpPicList/picList1'
import LpShowDetail from '@/page/lpPicList/children/detail'
import NewList from '@/page/newList/newList'
import NewDetail from '@/page/newDetail/newDetail'
import HxType from '@/page/hxPicList/hxPicList'
import HxDetail from '@/page/hxPicList/children/detail'
import Map from '@/page/map/address'
import MapDetail from '@/page/map/map'
import About from '@/page/about/singlePage'
import RegisterLogin from '@/page/registerLogin/registerLogin'
import Order from '@/page/order/order'
import Login from '@/page/login/login'
import Register from '@/page/register/register'
import Reset from '@/page/reset/reset'
import FullView from '@/page/fullView/fullView' // 全景图页面
import Video from '@/page/video/video'

Vue.use(Router)

export default new Router({
  routes: [
    { // 首页
      path: '/',
      component: Home
    },
    { // 楼盘鉴赏列表页
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
    { // 楼盘鉴赏详情页
      path: '/lpshow/detail',
      name: 'fullPic',
      component: LpShowDetail
    },
    { // 新闻资讯列表页
      path: '/active',
      component: NewList
      // children: [ // 新闻资讯详情页
      //   {
      //     path: 'detail',
      //     name: 'activeDetail',
      //     component: NewDetail
      //   }
      // ]
    },
    {
      path: '/active/detail',
      name: 'activeDetail',
      component: NewDetail
    },
    { // 户型图鉴赏列表
      path: '/hxtype',
      component: HxType
    },
    { // 户型图鉴赏详情
      path: '/hxstype/detail',
      name: 'hxDetail',
      component: HxDetail
    },
    { // 项目地图页
      path: '/map',
      component: Map
    },
    {
      path: '/mapdetail',
      component: MapDetail
    },
    { // 公司简介页
      path: '/about',
      component: About
    },
    { // 登录注册页
      path: '/join',
      component: RegisterLogin
    },
    { // 预约看房
      path: '/order',
      component: Order
    },
    { // 全景图页面
      path: '/fullview',
      component: FullView
    },
    { // 登录
      path: '/login',
      component: Login
    },
    { // 注册
      path: '/register',
      component: Register
    },
    { // 密码重置
      path: '/reset',
      component: Reset
    },
    { // 视频
      path: '/video',
      component: Video
    }
  ]
})
