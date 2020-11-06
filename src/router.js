import { createWebHashHistory, createRouter } from "vue-router";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: "/", redirect: "/home.html" },
        { path: "/home.html", component: () => import("@/pages/Home.vue") },
        { path: "/about.html", component: () => import("@/pages/About.vue") },
        { path: "/services.html", component: () => import("@/pages/Services.vue") },
        { path: "/testimonials.html", component: () => import("@/pages/Testimonials.vue") },
        { path: "/contact.html", component: () => import("@/pages/Contact.vue") }
    ]
});

export default router;