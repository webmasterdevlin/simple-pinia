import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/posts",
    name: "posts",
    meta: {
      title: "Posts",
    },
    component: () => import("../pages/Posts.vue"),
  },
  {
    path: "/features",
    name: "features",
    meta: {
      title: "Features",
    },
    component: () => import("../pages/Features.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
