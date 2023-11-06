import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/default/Default.vue";
import Home from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: DefaultLayout,
      children: [
        {
          path: "",
          name: "home",
          component: Home,
        },
      ],
    },
  ],
});

export default router;
