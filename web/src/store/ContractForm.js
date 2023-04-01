import axios from "axios";
import moment from "moment";
import numberToWords from "number-to-words";

import { formatCurrency, numbersOnly, terbilang } from "@/utils/helpers";

const defaultForm = {
  discont: 10000,
  number_id: 11,
  time_period: 7,
  date_start: new Date(moment().format("YYYY-MM-DD")),
  date_end: new Date(moment().add({ day: 7 }).format("YYYY-MM-DD")),
  name_item: null,
  type_item: "electronic",
  type_sub_item: null,
  etc: null,
  // kelengkapan barang
  complete_item: null,
  // kekurangan barang
  deficiency_item: null,
  note_item: null,
  mentioned_marhun_bih: null,
  // taksiran marhun
  asset_valuation: null,
  asset_valuation_read: null,
  // Marhun Bih
  interest_free_loan: null,
  interest_free_loan_read: null,
  // opsi pembayaran
  payment_method: 1,
  // biaya titip
  comission_fee: null,
  comission_fee_read: null,
  comission_fee_paid: null,
  comission_fee_paid_read: null,
  comission_fee_paid_total: null,
  comission_fee_paid_total_read: null,
  //
  admin_fee: null,
  admin_fee_read: "Rp 10.000",
  in_text: null
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
      time_periods: [
        {
          label: "7 Days",
          value: 7
        },
        {
          label: "15 Days",
          value: 15
        },
        {
          label: "30 Days",
          value: 30
        },
        {
          label: "60 Days",
          value: 60
        }
      ],
      payment_methods: [
        {
          value: 1,
          label: "Daily"
        },
        {
          value: 7,
          label: "7 Days"
        }
      ],
      type_items: [
        { label: "Electronic", value: "electronic" },
        { label: "Transportation", value: "transportation" }
      ],
      type_sub_items: {
        electronic: [
          {
            label: "Smartphone",
            value: "smartphone"
          },
          {
            label: "Laptop / PC",
            value: "laptop / pc"
          },
          {
            label: "Kamera",
            value: "camera"
          },
          {
            label: "TV",
            value: "tv"
          },
          {
            label: "Dan lain lain",
            value: "etc"
          }
        ],
        transportation: [
          {
            label: "Motor",
            value: "motor cycle"
          },
          {
            label: "Mobil",
            value: "Car"
          }
        ]
      },
      comission_fee_paids: [],
    },
    loading: {
      table: false
    },
    settings: {
      lang: "id", // id
      margin: {
        "electronic": 5, // 5%
        "transportation": 10, // 10%
      },
      admin_fee: {
        "electronic": 10000,
        "transportation": 50000,
      }
    },
    tab_active: "item", // item, customer, confirm
  },
  mutations: {
    INSERT_FORM_NUMBER_ID(state, payload) {
      state.form.number_id = payload.number_id;
    },
    INSERT_FORM_TIME_PERIOD(state, payload) {
      state.form.time_period = payload.time_period;
    },
    INSERT_FORM_DATE_START(state, payload) {
      state.form.date_start = payload.date_start;
    },
    INSERT_FORM_DATE_END(state, payload) {
      state.form.date_end = payload.date_end;
    },
    INSERT_FORM_TYPE_ITEM(state, payload) {
      state.form.type_item = payload.type_item;
    },
    INSERT_FORM_NAME_ITEM(state, payload) {
      state.form.name_item = payload.name_item;
    },
    INSERT_FORM_TYPE_SUB_ITEM(state, payload) {
      state.form.type_sub_item = payload.type_sub_item;
    },
    INSERT_FORM_ETC(state, payload) {
      state.form.etc = payload.etc;
    },
    INSERT_FORM_COMPLETE_ITEM(state, payload) {
      state.form.complete_item = payload.complete_item;
    },
    INSERT_FORM_DEFICIENCY_ITEM(state, payload) {
      state.form.deficiency_item = payload.deficiency_item;
    },
    INSERT_FORM_NOTE_ITEM(state, payload) {
      state.form.note_item = payload.note_item;
    },
    INSERT_FORM_ASSET_VALUATION(state, payload) {
      const numericValue = numbersOnly(payload.asset_valuation);
      const readAble = formatCurrency(payload.asset_valuation, 'Rp ');
      state.form.asset_valuation = numericValue;
      state.form.asset_valuation_read = readAble;
    },
    INSERT_FORM_INTEREST_FREE_LOAN(state, payload) {
      // state.form.interest_free_loan = payload.interest_free_loan;
      const numericValue = numbersOnly(payload.interest_free_loan);
      const readAble = formatCurrency(payload.interest_free_loan, 'Rp ');
      state.form.interest_free_loan = numericValue;
      state.form.interest_free_loan_read = readAble;
    },
    INSERT_FORM_PAYMENT_METHOD(state, payload) {
      state.form.payment_method = payload.payment_method;
    },
    INSERT_FORM_COMISSION_FEE(state, payload) {
      const numericValue = numbersOnly(payload.comission_fee);
      const readAble = formatCurrency(payload.comission_fee, 'Rp ');
      state.form.comission_fee = numericValue;
      state.form.comission_fee_read = readAble;
    },
    INSERT_FORM_COMISSION_FEE_PAID(state, payload) {
      state.form.comission_fee_paid = payload.comission_fee_paid;
      // const numericValue = numbersOnly(payload.comission_fee_paid);
      // const readAble = formatCurrency(payload.comission_fee_paid, 'Rp ');
      // state.form.comission_fee_paid = numericValue;
      // state.form.comission_fee_paid_read = readAble;
    },
    INSERT_FORM_COMISSION_FEE_PAID_TOTAL(state, payload) {
      // state.form.comission_fee_paid_total = payload.comission_fee_paid_total;
      const numericValue = numbersOnly(payload.comission_fee_paid_total);
      const readAble = formatCurrency(payload.comission_fee_paid_total, 'Rp ');
      state.form.comission_fee_paid_total = numericValue;
      state.form.comission_fee_paid_total_read = readAble;
    },
    INSERT_FORM_ADMIN_FEE(state, payload) {
      // state.form.admin_fee = payload.admin_fee;
      const numericValue = numbersOnly(payload.admin_fee);
      const readAble = formatCurrency(payload.admin_fee, 'Rp ');
      state.form.admin_fee = numericValue;
      state.form.admin_fee_read = readAble;
    },
    INSERT_FORM_IN_TEXT(state, payload) {
      let interestFreeLoan = state.form.interest_free_loan;
      let mentionInterestFreeloan = null;

      if (state.settings.lang == "id") {
        mentionInterestFreeloan = terbilang(interestFreeLoan);
      } else if (state.settings.lang == "eng") {
        mentionInterestFreeloan = numberToWords.toWords(interestFreeLoan);
      }

      state.form.in_text = mentionInterestFreeloan;
    },
    UPDATE_TAB_ACTIVE(state, payload) {
      state.tab_active = payload.tab_active;
    },
    CLEAR_FORM(state, payload) {
      state.form = { ...defaultForm };
    }
  },
  actions: {
    onChangeDateEnd: (context, payload) => {
      // console.info(context.state.form.time_period);

      context.commit("INSERT_FORM_DATE_END", {
        date_end: new Date(
          moment(context.state.form.date_start)
            .add({ day: context.state.form.time_period })
            .format("YYYY-MM-DD")
        )
      });
    },
    onChangeOptionComissionFeePaids: (context, payload) => {
      // console.info("change option Comissionif fee paid");
      const listComissionFeePaid = _conditionComissionFeePaid(
        {
          time_period: context.state.form.time_period,
          payment_method: context.state.form.payment_method,
        }
      )

      context.state.form.comission_fee_paid = 1;
      context.state.options.comission_fee_paids = listComissionFeePaid;
    },
    onChangeComissionFee: (context, payload) => {
      // console.info("on change commision fee");
      const getComissionFee = _conditionComissionFee(context.state);

      // context.state.form.comission_fee = getComissionFee;
      context.commit("INSERT_FORM_COMISSION_FEE", { comission_fee: getComissionFee });
    },
    onChangeComissionFeePaidTotal: (context, payload) => {
      const getComissionFeePaidTotal = _conditionComissionFeePaidTotal(
        {
          comission_fee_paid: context.state.form.comission_fee_paid,
          comission_fee: context.state.form.comission_fee,
        }
      );

      // context.state.form.comission_fee_paid_total = getComissionFeePaidTotal;
      context.commit("INSERT_FORM_COMISSION_FEE_PAID_TOTAL", { comission_fee_paid_total: getComissionFeePaidTotal });
    },
    onChangeAdminFee: (context, payload) => {
      const getAdminFee = formatCurrency(context.state.settings.admin_fee[context.state.form.type_item], "Rp. ");

      context.commit("INSERT_FORM_ADMIN_FEE", { admin_fee: getAdminFee });
    },
  }
};

const _conditionComissionFeePaid = ({ time_period, payment_method, }) => {
  let maks = 1;
  let listComissionFeePaid = [];

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
    listComissionFeePaid.push({
      value: i,
      label: i,
    });
  }

  return (time_period && payment_method) ? listComissionFeePaid : [];
}

/* determine 'biaya titip'
 * value is 'nilai' from 'marhun_bih', 'opsi_pembayaran', or 'jenis_barang'
 * option for condition between 'marhun bih', 'opsi_pembayaran' and 'jenis_barang'
 */
const _conditionComissionFee = (state) => {
  const discont = state.form.discont,
    type_item = state.form.type_item,
    interest_free_loan = state.form.interest_free_loan != null ? parseInt(numbersOnly(state.form.interest_free_loan)) : 0,
    payment_method = state.form.payment_method,
    percent = state.settings.margin[type_item] / 100;
  let comission_fee = 0;

  // console.info(state.form);
  // console.info(discont, type_item, interest_free_loan, payment_method, percent);

  if (payment_method == 1) {
    comission_fee = (interest_free_loan * percent - discont) / 2 / 7
  } else if (payment_method == 7) {
    comission_fee = (interest_free_loan * percent - discont) / 2
  } else if (payment_method == 15) {
    comission_fee = interest_free_loan * percent
  }

  // console.info(interest_free_loan * percent - discont, payment_method);

  comission_fee = comission_fee > 0 ? comission_fee.toFixed(0) : 0;
  comission_fee = formatCurrency(comission_fee, 'Rp ');

  // console.info(comission_fee);

  return comission_fee;
}

const _conditionComissionFeePaidTotal = ({ comission_fee_paid, comission_fee }) => {
  let result = 0;

  // console.info(comission_fee);

  if (comission_fee_paid != 0 && comission_fee != null) {
    result = comission_fee_paid * parseInt(numbersOnly(comission_fee));
    result = formatCurrency(result, "Rp ");
  }


  return result;
}

export default ContractForm;

// Taksiran Marhun adalah sebuah istilah dalam bahasa Arab yang digunakan dalam konteks keuangan dan perbankan Islam.
// Secara harfiah, "taksiran marhun" berarti "penilaian yang dijamin" atau "penilaian yang dijadikan jaminan".
// Dalam konteks perbankan syariah, taksiran marhun adalah penilaian atas harga aset yang dijadikan jaminan dalam transaksi kredit atau pembiayaan.
// Penilaian ini dilakukan oleh pihak bank atau lembaga keuangan syariah untuk menentukan nilai jaminan atas aset yang diberikan oleh pihak peminjam atau nasabah.
// Taksiran marhun bertujuan untuk menjamin keabsahan dan keadilan transaksi perbankan syariah,
// serta melindungi kepentingan bank atau lembaga keuangan syariah dalam menghadapi risiko gagal bayar dari pihak peminjam atau nasabah.

// Marhun bih adalah suatu bentuk fasilitas keuangan atau bantuan dana dari pemberi pinjaman kepada peminjam,
// yang diberikan tanpa bunga atau tanpa keuntungan bagi pemberi pinjaman.
// Istilah "marhun bih" umumnya digunakan dalam konteks keuangan Islam,
// yang menekankan pentingnya menghindari riba atau bunga dalam transaksi keuangan.
