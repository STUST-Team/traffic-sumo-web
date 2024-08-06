const routes = [
    {
        path: "/vuexPractice",
        name: "VuexPractice",
        component: () => 
            import("@/views/phonePage/VuexPractice.vue")
    }
];

export default routes;