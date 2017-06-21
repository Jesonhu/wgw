import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home/home'
import articleList from '@/page/articleList/articleList'
import articleDetail from '@/page/articleDetail/articleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/new',
      component: articleList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: articleDetail
    }
  ]
})
