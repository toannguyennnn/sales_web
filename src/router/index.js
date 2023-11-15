import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../layouts/default/Default.vue";
import Home from "../views/HomeView.vue";
import Products from "../views/ProductsView.vue";
import SignIn from "../views/SignIn.vue";

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
        {
          path: "/products",
          name: "products",
          component: Products,
        },
      ],
    },
    {
      path: "/sign-in",
      name: "signIn",
      component: SignIn,
    },
  ],
});

export default router;
