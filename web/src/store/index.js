import Vue from "vue";
import Vuex from "vuex";

// module store
import Contract from './Contract';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Contract: Contract,
  },
  state: {
    user: {},
    base_url: null,
  },
  mutations: {
    INSERT_BASE_URL(state, payload) {
      state.base_url = payload.base_url;
    },
    INSERT_USER(state, payload) {
      state.user = payload.user;
    },
  },
  actions: {

  },
});

export default store;