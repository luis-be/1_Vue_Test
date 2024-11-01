import Vue from "vue";
import VueRouter from "vue-router";


import Home from "@/views/Home.vue";

const router = new VueRouter({
    mode: "history", // Utiliza el modo history para evitar el uso de hashes (#) en las URLs.
    routes
});

export default router;

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    }
];



Vue.use(VueRouter);