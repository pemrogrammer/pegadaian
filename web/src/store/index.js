import Vue from "vue";
import Vuex from "vuex";

// module store
import ContractForm from './ContractForm';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    ContractForm: ContractForm,
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