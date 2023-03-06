import Vue from "vue";
import VueRouter from "vue-router";

// layouts
import Default from "@/views/layouts/default.vue";

// pages
import Dashboard from "@/views/pages/Dashboard/dashboard.vue";
import AkadForm from "@/views/pages/Akad/akadForm.vue";

Vue.use(VueRouter);

function prefixRoutes(prefix, routes) {
  return routes.map((route) => {
    route.path = prefix + "" + route.path;
    return route;
  });
}

const routes = [
  {
    path: "/",
    component: Default,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      ...prefixRoutes("/akad", [
        {
          path: "/form",
          name: "akadForm",
          component: AkadForm,
        },
      ]),
    ],
  },

  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
