import { createSlice } from "@reduxjs/toolkit";
import customAxios from "../axios";
import moment from 'moment';

const defaultState = {
    tables: {
        allData: [],
        oneMonthLastData: [],
        twoMonthLastData: [],
        threeMonthLastData: [],
        dailyMonthLastData: [],
        sevenDayMonthLastData: [],
        fifteenDayLastData: [],
    },
    forms: {
        number_id: null,
        time_period: null,
        start_contract: null,
        end_contract: null,
        type_item: "electronic",
        value_etc: null,
    },
    lists: {
        time_periods: [{
                label: "7 Hari",
                value: "7 days",
                number: 7,
            },
            {
                label: "15 Hari",
                value: "15 days",
                number: 15,
            },
            {
                label: "30 Hari",
                value: "30 days",
                number: 30,
            },
            {
                label: "60 Hari",
                value: "60 days",
                number: 60,
            },
        ],
        type_sub_items: {
            "electronic": [{
                label: "Smartphone",
                value: "smartphone",
            }, {
                label: "Laptop / PC",
                value: "laptop / pc",
            }, {
                label: "Kamera",
                value: "camera",
            }, {
                label: "TV",
                value: "tv",
            }, {
                label: "Dan lain lain",
                value: "etc",
            }, ],
            "vehicle": [{
                    label: "Motor",
                    value: "motor cycle",
                },
                {
                    label: "Mobil",
                    value: "Car",
                },
            ]
        }
    }
}

const akad = createSlice({
    name: "akad",
    initialState: {
        ...defaultState,
    },
    reducers: {
        onInsertForm(state, action) {
            state.forms = {
                ...state.forms,
                [action.payload.name]: action.payload.value,
            }
        },
        onResetForm(state, action) {
            state.forms = defaultState.forms;
        },
        onChangeEndContract(state, action) {
            const getNumberTimePeriod = state.lists.time_periods.find(item => item.value === action.payload.time_period);

            state.forms.end_contract = new Date(moment().add(getNumberTimePeriod.number, "days"));
        },
        onInsertInitialState(state, action) {
            // PENTING JANGAN DI HAPUS
            // 01 - 030417 - 1
            //no_cabang-tanggal_bulan_tahun-data_ke

            state.forms.number_id = `01-${moment().format("DDMMyyyy")}-001`;
            state.forms.start_contract = new Date(moment());
            state.forms.end_contract = new Date(moment().add(7, 'days'));
        },
        onInsertAllData(state, action) {
            state.allData = action.payload.allData;
        }
    },
});

export const fetchAllCustomerContract = async() => {
    // return state.akad;
    return await customAxios.get('v1/akad/all-customer-contract', {
            // params: {
            //     ID: 12345
            // }
        })
        .then((responses) => {
            // return responses.data;
            return responses;
        })
        .catch((errors) => {
            console.log(errors);
        });
}

export const fetchContractDueDate = async() => {
    // return state.akad;
    return await customAxios
        .get('v1/akad/contract-due-date')
        .then((responses) => {
            // return responses.data;
            return responses;
        })
        .catch((errors) => {
            console.log(errors);
        });
}

export const fetchKeelAuction = async() => {
    // return state.akad;
    return await customAxios
        .get('v1/akad/keel-auction')
        .then((responses) => {
            // return responses.data;
            return responses;
        })
        .catch((errors) => {
            console.log(errors);
        });
}

export const { onInsertAllData, onInsertForm, onChangeEndContract, onInsertInitialState } = akad.actions;
export default akad.reducer;