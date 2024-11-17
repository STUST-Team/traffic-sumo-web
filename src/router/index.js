import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import NextPage from '../components/NextPage.vue';
import MapPage from '../components/MapPage.vue';
import IntroducePage from '../components/IntroducePage.vue';
import ReferencesPage from '../components/ReferencesPage.vue';

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
    path: '/references-page',
    name: 'ReferencesPage',
    component: ReferencesPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;