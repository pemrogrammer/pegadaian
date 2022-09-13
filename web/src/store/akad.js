import { createSlice } from "@reduxjs/toolkit";
import customAxios from "../axios";
import moment from 'moment';
import { cleaningNumber, numbersOnly, terbilang } from "../utils/Utils";

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
        percent: 10,
        margin: {
            "electronic": 3, // 3%
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
            {
                label: '15 Hari',
                value: 15,
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
            let marhun_bih = state.forms.marhun_bih;
            marhun_bih = numbersOnly(marhun_bih);

            if (marhun_bih == null || marhun_bih == "") {
                state.forms.mentioned_marhun_bih = null;
            } else {
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
function conditionDepositFee(state) {
    // var persenan = $('#persenan').val() / 100
    const percent = state.forms.percent;
    const marhun_bih = cleaningNumber(state.forms.marhun_bih);
    const payment_method = state.forms.payment_method;
    const time_period = state.forms.time_period;

    console.info(percent, marhun_bih, payment_method, time_period);

    // // override base on condition form 'opsi_pembayaran'
    // if (option == 'marhun_bih') {
    //     marhun_bih = value
    // } else {
    //     marhun_bih = $('#marhun_bih').val().replace(".", "").replace(".", "").replace(".", "")
    // }

    // if (option == 'opsi_pembayaran') {
    //     var opsi_pembayaran = value
    // } else {
    //     var opsi_pembayaran = $('#nilai_opsi_pembayaran').val()
    // }

    // if (option == 'jenis_barang') {
    //     var jenis_barang = value
    // } else {
    //     var jenis_barang = $('#nilai_jenis_barang').val()
    // }

    // if (option == 'bt_yang_dibayar') {
    //     var bt_yang_dibayar = value
    // } else {
    //     var bt_yang_dibayar = $('#nilai_bt_yang_dibayar').val();
    // }

    // set nominal 'potongan biaya titip'
    // if(jenis_barang == 'elektronik'){
    //     var potongan = {{$potongan_elektronik ? $potongan_elektronik : 0}}
    //     var persenan = {{$margin_elektronik ? $margin_elektronik : 1}} / 100
    // }else{
    //     var potongan = {{$potongan_kendaraan ? $potongan_kendaraan : 0}}
    //     var persenan = {{$margin_kendaraan ? $margin_kendaraan : 1}} / 100
    // }

    // formula 'opsi_pembayaran'

    // if (opsi_pembayaran == 1) {
    //     var biaya_titip = (marhun_bih * persenan - potongan) / 2 / 7
    // } else if (opsi_pembayaran == 7) {
    //     var biaya_titip = (marhun_bih * persenan - potongan) / 2
    // } else if (opsi_pembayaran == 15) {
    //     var biaya_titip = marhun_bih * persenan
    // }

    // // condition for negatif number of 'biaya titip'
    // biaya_titip = biaya_titip <= 0 ? 0 : biaya_titip

    // if (biaya_titip >= 1000 && biaya_titip != 0) {
    //     thousand_bt = 1000
    // } else {
    //     thousand_bt = 1
    // }

    // biaya_titip = format_nominal(biaya_titip)
    // biaya_titip = biaya_titip.replace("Rp", "")
    // biaya_titip = Math.ceil(biaya_titip) * thousand_bt
    // var nominal_biaya_titip = formatRupiah(biaya_titip.toString())
    // $('.biaya_titip').val(nominal_biaya_titip)

    // // 'rumus jumlah biaya titip yang dibayar'
    // var jml_bt_yang_dibayar = biaya_titip * bt_yang_dibayar

    // // console.log(jml_bt_yang_dibayar)

    // jml_bt_yang_dibayar = jml_bt_yang_dibayar
    // jml_bt_yang_dibayar = formatRupiah(jml_bt_yang_dibayar.toString())
    // $('.jml_bt_yang_dibayar').val(jml_bt_yang_dibayar)
}

export const {
    onInsertAllData,
    onInsertForm,
    onChangeEndContract,
    onInsertInitialState,
    onChangeDepositFeePaid,
    onChangeDepositFee,
} = akad.actions;

export default akad.reducer;