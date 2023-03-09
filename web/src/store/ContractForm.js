import axios from "axios";
import moment from "moment";

const defaultForm = {
  number_id: 11,
  term_contract: 7,
  date_start: new Date(moment().format("YYYY-MM-DD")),
  date_end: new Date(moment().add({ day: 7 }).format("YYYY-MM-DD"))
};

const ContractForm = {
  namespaced: true,
  state: {
    base_url: null,
    data: [],
    params: {
      date_filter: new Date()
    },
    form: { ...defaultForm },
    options: {
      term_contracts: [
        {
          id: 7,
          label: 7
        },
        {
          id: 14,
          label: 14
        }
      ]
    },
    loading: {
      table: false
    }
  },
  mutations: {
    INSERT_FORM_NUMBER_ID(state, payload) {
      state.form.number_id = payload.number_id;
    },
    INSERT_FORM_TERM_CONTRACT(state, payload) {
      state.form.term_contract = payload.term_contract;
    },
    INSERT_FORM_DATE_START(state, payload) {
      state.form.date_start = payload.date_start;
    },
    INSERT_FORM_DATE_END(state, payload) {
      state.form.date_end = payload.date_end;
    },
    CLEAR_FORM(state, payload) {
      state.form = { ...defaultForm };
    }
  },
  actions: {
    onChangeDateEnd: (context, payload) => {
      // console.info(context.state.form.term_contract);

      context.commit("INSERT_FORM_DATE_END", {
        date_end: new Date(
          moment()
            .add({ day: context.state.form.term_contract })
            .format("YYYY-MM-DD")
        )
      });
    }
  }
};

export default ContractForm;
