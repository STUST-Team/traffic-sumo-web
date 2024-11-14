import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import NextPage from '../components/NextPage.vue';
import MapPage from '../components/MapPage.vue';
import Introduce from '../components/Introduce.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/next-page',
    name: 'NextPage',
    component: NextPage
  },
  {
    path: '/map',
    name: 'MapPage',
    component: MapPage
  },
  {
    path: '/introduction',
    name: 'Introduce',
    component: Introduce
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;