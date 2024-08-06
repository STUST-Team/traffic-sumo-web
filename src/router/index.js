import { createRouter, createWebHistory} from "vue-router";

import Practice from "./Practice/phonePractice.js";


const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [...Practice]
});

export default router;