import { createWebHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", redirect: "/home.html" },
        { path: "/home.html", component: () => import("@/pages/Home.vue") },
        { path: "/about.html", component: () => import("@/pages/About.vue") },
        { path: "/services.html", component: () => import("@/pages/Services.vue") },
        { path: "/testimonials.html", component: () => import("@/pages/Testimonials.vue") }
    ]
});

export default router;