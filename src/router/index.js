import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import NextPage from '../components/NextPage.vue';
import MapPage from '../components/MapPage.vue';
import IntroducePage from '../components/IntroducePage.vue';
import ChartPage from '../components/ChartPage.vue';

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
    path: '/introduce-page',
    name: 'IntroducePage',
    component: IntroducePage
  },
  {
    path: '/chart',
    name: 'ChartPage',
    component: ChartPage
  }  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;