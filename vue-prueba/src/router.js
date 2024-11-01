import Vue from "vue"; // Asegúrate de que esta línea sea correcta
import VueRouter from "vue-router"; // Asegúrate de que esta línea sea correcta

Vue.use(VueRouter); // Esto debería funcionar si Vue está importado correctamente

// Define tus rutas aquí
import Home from "@/views/HomeView.vue";
import About from "@/views/AboutView.vue";

const routes = [
    { path: "/", name: "home", component: Home },
    { path: "/about", name: "about", component: About }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
