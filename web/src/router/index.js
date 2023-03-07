import Vue from "vue";
import VueRouter from "vue-router";

// layouts
import Default from "@/views/layouts/default.vue";

// pages
import Dashboard from "@/views/pages/Dashboard.vue";
import ContractForm from "@/views/pages/ContractForm.vue";
import ContractData from "@/views/pages/ContractData.vue";
import CustomerData from "@/views/pages/CustomerData.vue";

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
    redirect: "/dashboard",
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
      },
      ...prefixRoutes("/contract", [
        {
          path: "/form",
          name: "contractForm",
          component: ContractForm,
        },
        {
          path: "/data",
          name: "contractData",
          component: ContractData,
        },
      ]),
      ...prefixRoutes("/customer", [
        {
          path: "/data",
          name: "customerData",
          component: CustomerData,
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
