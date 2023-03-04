import Vue from "vue";
import VueRouter from "vue-router";
import Default from "@/layouts/default";
import Dashboard from "@/modules/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "dashboard",
    component: Default,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: Dashboard,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
