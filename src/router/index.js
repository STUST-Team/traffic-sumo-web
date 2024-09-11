import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import NextPage from '../components/NextPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/next-page',
    name: 'NextPage',
    component: NextPage // 使用靜態導入
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router