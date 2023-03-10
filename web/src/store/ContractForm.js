import axios from "axios";
import moment from "moment";

const defaultForm = {
  number_id: 11,
  term_contract: 7,
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
  payment_method: 1,
  mentioned_marhun_bih: null,
  deposit_fee: null,
  admin_fee: "Rp. 10.0000",
  deposit_fee_paid: 0,
  deposit_fee_paid_total: null,
  // taksiran marhun
  asset_valuation: "Rp, 0",
  // Marhun Bih
  interest_free_loan: "Rp, 0"
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
      }
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
      state.form.asset_valuation = payload.asset_valuation;
    },
    INSERT_FORM_INTEREST_FREE_LOAN(state, payload) {
      state.form.interest_free_loan = payload.interest_free_loan;
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
          moment(context.state.form.date_start)
            .add({ day: context.state.form.term_contract })
            .format("YYYY-MM-DD")
        )
      });
    }
  }
};

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
