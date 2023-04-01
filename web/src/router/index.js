import Vue from "vue";
import VueRouter from "vue-router";

// layouts
import Default from "@/views/layouts/default.vue";

// main modules
import Dashboard from "@/views/modules/Dashboard.vue";
import ContractForm from "@/views/modules/contract/Form.vue";
import ContractTable from "@/views/modules//contract/Table.vue";
// import CustomerData from "@/views/modules/CustomerData.vue";

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
          name: "contractTable",
          component: ContractTable,
        },
      ]),
      // ...prefixRoutes("/customer", [
      //   {
      //     path: "/data",
      //     name: "customerData",
      //     component: CustomerData,
      //   },
      // ]),
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
