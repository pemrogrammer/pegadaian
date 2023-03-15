import axios from "axios";
import moment from "moment";

import { formatCurrency, numbersOnly, cleaningNumber } from "../utils";

const defaultForm = {
  number_id: 11,
  time_periode: 7,
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
  read_asset_valuation: null,
  // Marhun Bih
  interest_free_loan: null,
  read_interest_free_loan: null,
  // opsi pembayaran
  payment_method: 1,
  // biaya titip
  deposit_fee: null,
  admin_fee: null,
  deposit_fee_paid: null,
  deposit_fee_paid_total: "50.000",
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
      time_periodes: [
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
        { text: "Electronic", value: "electronic" },
        { text: "Transport", value: "transport" }
      ],
      type_sub_items: {
        electronic: [
          {
            text: "Smartphone",
            value: "smartphone"
          },
          {
            text: "Laptop / PC",
            value: "laptop / pc"
          },
          {
            text: "Kamera",
            value: "camera"
          },
          {
            text: "TV",
            value: "tv"
          },
          {
            text: "Dan lain lain",
            value: "etc"
          }
        ],
        transport: [
          {
            text: "Motor",
            value: "motor cycle"
          },
          {
            text: "Mobil",
            value: "Car"
          }
        ]
      },
      deposit_fee_paids: []
    },
    loading: {
      table: false
    }
  },
  mutations: {
    INSERT_FORM_NUMBER_ID(state, payload) {
      state.form.number_id = payload.number_id;
    },
    INSERT_FORM_TIME_PERIODE(state, payload) {
      state.form.time_periode = payload.time_periode;
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
      const readAble = formatCurrency(payload.asset_valuation, ".");
      state.form.asset_valuation = numericValue;
      state.form.read_asset_valuation = readAble;
    },
    INSERT_FORM_INTEREST_FREE_LOAN(state, payload) {
      // state.form.interest_free_loan = payload.interest_free_loan;
      const numericValue = numbersOnly(payload.interest_free_loan);
      const readAble = formatCurrency(payload.interest_free_loan, ".");
      state.form.interest_free_loan = numericValue;
      state.form.read_interest_free_loan = readAble;
    },
    INSERT_FORM_PAYMENT_METHOD(state, payload) {
      state.form.payment_method = payload.payment_method;
    },
    INSERT_FORM_DEPOSIT_FEE(state, payload) {
      state.form.deposit_fee = payload.deposit_fee;
    },
    INSERT_FORM_DEPOSIT_FEE_PAID(state, payload) {
      state.form.deposit_fee_paid = payload.deposit_fee_paid;
    },
    INSERT_FORM_DEPOSIT_FEE_PAID_TOTAL(state, payload) {
      state.form.deposit_fee_paid_total = payload.deposit_fee_paid_total;
    },
    INSERT_FORM_ADMIN_FEE(state, payload) {
      state.form.admin_fee = payload.admin_fee;
    },
    INSERT_FORM_IN_TEXT(state, payload) {
      state.form.in_text = payload.in_text;
    },
    CLEAR_FORM(state, payload) {
      state.form = { ...defaultForm };
    }
  },
  actions: {
    onChangeDateEnd: (context, payload) => {
      // console.info(context.state.form.time_periode);

      context.commit("INSERT_FORM_DATE_END", {
        date_end: new Date(
          moment(context.state.form.date_start)
            .add({ day: context.state.form.time_periode })
            .format("YYYY-MM-DD")
        )
      });
    },
    onChangeOptionDepositFeePaids: (context, payload) => {
      // console.info("change option depositif fee paid");
      const listDepositFeePaid = _conditionDepositeFeePaid(
        {
          time_periode: context.state.form.time_periode,
          payment_method: context.state.form.payment_method,
        }
      )

      context.state.form.deposit_fee_paid = 1;
      context.state.options.deposit_fee_paids = listDepositFeePaid;
    },
  }
};

const _conditionDepositeFeePaid = ({ time_periode, payment_method, }) => {
  let maks = 1;
  let listDepositFeePaid = [];

  // console.info(time_periode, payment_method);

  if (time_periode == 7) {
    if (payment_method == 1) {
      maks = 7;
    } else if (payment_method == 7) {
      maks = 1;
    }
  } else if (time_periode == 15) {
    if (payment_method == 1) {
      maks = 15;
    } else if (payment_method == 7) {
      maks = 2;
    } else if (payment_method == 15) {
      maks = 1;
    }
  } else if (time_periode == 30) {
    if (payment_method == 1) {
      maks = 15;
    } else if (payment_method == 7) {
      maks = 4;
    } else if (payment_method == 15) {
      maks = 2;
    }
  } else if (time_periode == 60) {
    if (payment_method == 1) {
      maks = 15;
    } else if (payment_method == 7) {
      maks = 9;
    } else if (payment_method == 15) {
      maks = 4;
    }
  }

  for (var i = 1; i <= maks; i++) {
    listDepositFeePaid.push({
      value: i,
      label: i,
    });
  }

  return (time_periode && payment_method) ? listDepositFeePaid : [];
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
