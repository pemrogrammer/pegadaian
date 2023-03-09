import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue } from "bootstrap-vue";
import VueSweetalert2 from "vue-sweetalert2";

// import "bootstrap/dist/css/bootstrap.css";
import "vue-select/dist/vue-select.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "vue2-datepicker/index.css";

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(VueSweetalert2);

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
