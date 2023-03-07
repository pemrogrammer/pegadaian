import axios from "axios";
import moment from "moment";

const defaultForm = {
    number_id: 11,
}

const ContractForm = {
    namespaced: true,
    state: {
        base_url: null,
        data: [],
        params: {
            date_filter: new Date(),
        },
        form: {...defaultForm },
        options: {
            //
        },
        loading: {
            table: false,
        },
    },
    mutations: {
        INSERT_FORM_NUMBER_ID(state, payload) {
            state.form.number_id = payload.number_id;  
        },
        CLEAR_FORM(state, payload) {
            state.form = { ...defaultForm };
        },
    },
    actions: {
        // onIncrement: (context, payload) => {
        //     context.commit("INCREMENT");
        // },

    }
}

export default ContractForm;
