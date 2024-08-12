import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 导入 router

createApp(App).use(router).mount('#app') // 使用 router


const app = createApp(App);

app.use(router);
//    .use(store);

app.mount('#app')




