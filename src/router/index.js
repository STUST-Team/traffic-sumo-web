// src/router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import NextPage from '../views/NextPage.vue' // 导入你即将写的下一页面组件
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/next-page',
    name: 'NextPage',
    component: NextPage // 配置下一页面的路由
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
