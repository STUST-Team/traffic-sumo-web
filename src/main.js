import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import NextPage from './components/NextPage.vue';
import MapPage from './components/MapPage.vue';
import IntroducePage from './components/IntroducePage.vue';
import ReferencesPage from './components/ReferencesPage.vue';
import './assets/styles/tailwind.css';

const routes = [
  { path: '/', component: HomePage },
  { path: '/next-page', component: NextPage },
  { path: '/map', component: MapPage },
  { path: '/introduce-page', component: IntroducePage },
  { path: '/references-page', component: ReferencesPage }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');