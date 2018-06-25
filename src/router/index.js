import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Layout from '../views/layout/Layout'

export const constantRouterMap = [
  {path: '/login', component: () => import('@/views/login/index'), hidden: true },
  {path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  },

  {
    path: '/goods',
    component: Layout,
    redirect: '/goods/add-goods',
    name: 'Example',
    meta: {title: '产品管理', icon: 'goods' },
    children: [
      {
        path: 'add-goods',
        name: 'add-goods',
        component: () => import('@/views/goods/index'),
        meta: {title: '产品列表', icon: 'add' }
      },
      {
        path: 'color',
        name: 'color',
        component: () => import('@/views/goods/color'),
        meta: {title: '颜色管理', icon: ''}
      }
      // {
      //   path: 'tree',
      //   name: 'Tree',
      //   component: () => import('@/views/tree/index'),
      //   meta: { title: 'Tree', icon: 'tree' }
      // }
    ]
  },

  {
    path: '/express',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/express/index'),
        meta: { title: '快递', icon: 'express' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

