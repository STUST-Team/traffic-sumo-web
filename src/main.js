import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createMemoryHistory } from 'vue-router';
import HomePage from './components/HomePage.vue';
import NextPage from './components/NextPage.vue';


const routes = [
  { path: '/', component: HomePage },
  { path: '/next-page', component: NextPage }
];

const router = createRouter({
    history: createMemoryHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');