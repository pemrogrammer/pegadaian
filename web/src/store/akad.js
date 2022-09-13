import { createSlice } from "@reduxjs/toolkit";
import customAxios from "../axios";
import moment from 'moment';
import { cleaningNumber, formatCurrency, numbersOnly, terbilang } from "../utils/Utils";

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
        discont: 10000,
        margin: {
            "electronic": 10, // 10%
            "vehicle": 5, // 5%
        },
        number_id: null,
        time_period: 7,
        start_contract: null,
        end_contract: null,
        type_item: "electronic",
        value_etc: null,
        payment_method: 1,
        mentioned_marhun_bih: null,
        deposit_fee: null,
    },
    lists: {
        time_periods: [{
                label: "7 Hari",
                value: 7,
            },
            {
                label: "15 Hari",
                value: 15,
            },
            {
                label: "30 Hari",
                value: 30,
            },
            {
                label: "60 Hari",
                value: 60,
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
        },
        payment_methods: [{
                label: 'Harian',
                value: 1,
            },
            {
                label: '7 Hari',
                value: 7,
            },
        ],
        deposit_fee_paids: [],
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
            state.forms.end_contract = new Date(moment().add(parseInt(action.payload.time_period), "days"));
        },
        onChangeDepositFeePaid(state, action) {
            state.lists.deposit_fee_paids = conditionDepositeFeePaid({ time_period: state.forms.time_period, payment_method: state.forms.payment_method });
        },
        onChangeDepositFee(state, action) {
            state.forms.deposit_fee = conditionDepositFee(state);
        },
        onChangePaymentMethod(state, action) {
            state.lists.payment_methods = conditionPaymentMethod({ time_period: state.forms.time_period });
        },
        onChangeMentionedMarhunBih(state, action) {
            let marhun_bih = state.forms.marhun_bih;

            if (marhun_bih == null || marhun_bih == "") {
                state.forms.mentioned_marhun_bih = null;
            } else {
                marhun_bih = numbersOnly(marhun_bih);
                const mentioned_marhun_bih = terbilang(marhun_bih);
                state.forms.mentioned_marhun_bih = mentioned_marhun_bih;
            }
        },
        onInsertInitialState(state, action) {
            // PENTING JANGAN DI HAPUS
            // 01 - 030417 - 1
            //no_cabang-tanggal_bulan_tahun-data_ke

            state.forms.number_id = `01-${moment().format("DDMMyyyy")}-001`;
            state.forms.start_contract = new Date(moment());
            state.forms.end_contract = new Date(moment().add(7, 'days'));
            state.lists.deposit_fee_paids = conditionDepositeFeePaid({ time_period: state.forms.time_period, payment_method: state.forms.payment_method });
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

const conditionDepositeFeePaid = ({ time_period, payment_method, }) => {
    let maks = 1;
    let listDepositFeePaid = [];

    // console.info(time_period, payment_method);

    if (time_period == 7) {
        if (payment_method == 1) {
            maks = 7;
        } else if (payment_method == 7) {
            maks = 1;
        }
    } else if (time_period == 15) {
        if (payment_method == 1) {
            maks = 15;
        } else if (payment_method == 7) {
            maks = 2;
        } else if (payment_method == 15) {
            maks = 1;
        }
    } else if (time_period == 30) {
        if (payment_method == 1) {
            maks = 15;
        } else if (payment_method == 7) {
            maks = 4;
        } else if (payment_method == 15) {
            maks = 2;
        }
    } else if (time_period == 60) {
        if (payment_method == 1) {
            maks = 15;
        } else if (payment_method == 7) {
            maks = 9;
        } else if (payment_method == 15) {
            maks = 4;
        }
    }

    for (var i = 1; i <= maks; i++) {
        listDepositFeePaid.push(i);
    }

    return listDepositFeePaid;
}

/* determine 'biaya titip'
 * value is 'nilai' from 'marhun_bih', 'opsi_pembayaran', or 'jenis_barang'
 * option for condition between 'marhun bih', 'opsi_pembayaran' and 'jenis_barang'
 */
const conditionDepositFee = (state) => {
    // var persenan = $('#persenan').val() / 100
    const discont = state.forms.discont,
        type_item = state.forms.type_item,
        marhun_bih = state.forms.marhun_bih != null ? parseInt(numbersOnly(state.forms.marhun_bih)) : 0,
        payment_method = state.forms.payment_method,
        time_period = state.forms.time_period,
        percent = state.forms.margin[type_item] / 100;
    let deposit_fee = 0;

    if (payment_method == 1) {
        deposit_fee = (marhun_bih * percent - discont) / 2 / 7
    } else if (payment_method == 7) {
        deposit_fee = (marhun_bih * percent - discont) / 2
    } else if (payment_method == 15) {
        deposit_fee = marhun_bih * percent
    }

    deposit_fee = deposit_fee > 0 ? deposit_fee.toFixed(0) : 0;
    const deposit_fee_currency = formatCurrency(deposit_fee, "Rp. ");

    // console.info(deposit_fee, deposit_fee_currency, marhun_bih, percent, discont);

    return deposit_fee_currency;
}

const conditionPaymentMethod = ({ time_period }) => {
    if (time_period == 7) {
        return [{
                label: 'Harian',
                value: 1,
            },
            {
                label: '7 Hari',
                value: 7,
            },
        ];
    } else {
        return [{
                label: 'Harian',
                value: 1,
            },
            {
                label: '7 Hari',
                value: 7,
            },
            {
                label: '15 Hari',
                value: 15,
            },
        ]
    }
}

export const {
    onInsertForm,
    onInsertAllData,
    onChangeDepositFee,
    onChangeEndContract,
    onInsertInitialState,
    onChangePaymentMethod,
    onChangeDepositFeePaid,
    onChangeMentionedMarhunBih,
} = akad.actions;

export default akad.reducer;