import axios from "axios";
import moment from "moment";

const defaultForm = {
  number_id: 11,
  term_contract: 7,
};

const ContractForm = {
  namespaced: true,
  state: {
    base_url: null,
    data: [],
    params: {
      date_filter: new Date(),
    },
    form: { ...defaultForm },
    options: {
      term_contracts: [
        {
          id: 7,
          label: 7,
        },
        {
          id: 14,
          label: 14,
        },
      ],
    },
    loading: {
      table: false,
    },
  },
  mutations: {
    INSERT_FORM_NUMBER_ID(state, payload) {
      state.form.number_id = payload.number_id;
    },
    INSERT_FORM_TERM_CONTRACT(state, payload) {
      state.form.term_contract = payload.term_contract;
    },
    CLEAR_FORM(state, payload) {
      state.form = { ...defaultForm };
    },
  },
  actions: {
    // onIncrement: (context, payload) => {
    //     context.commit("INCREMENT");
    // },
  },
};

export default ContractForm;
