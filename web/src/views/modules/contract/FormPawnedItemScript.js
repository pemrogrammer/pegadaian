import axios from "axios";
import moment from "moment";
import VueSelect from "vue-select";
import DatePicker from "vue2-datepicker";

export default {
  data() {
    return {
      is_loading: false,
    };
  },
  components: {
    VueSelect,
    DatePicker,
  },
  mounted() {
    this.$store.dispatch("Contract/onChangeOptionComissionFeePaids");
  },
  computed: {
    getForm() {
      return this.$store.state.Contract.form;
    },
    getOptionTimePeriodes() {
      return this.$store.state.Contract.options.time_periods;
    },
    getOptionPaymentMethods() {
      return this.$store.state.Contract.options.payment_methods;
    },
    getOptionTypeItems() {
      return this.$store.state.Contract.options.type_items;
    },
    getOptionTypeSubItems() {
      return this.$store.state.Contract.options.type_sub_items[
        this.type_item
      ];
    },
    getOptionComissionFeePaids() {
      return this.$store.state.Contract.options.comission_fee_paids;
    },
    number_id: {
      get() {
        return this.$store.state.Contract.form.number_id;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_NUMBER_ID", {
          number_id: value,
        });
      },
    },
    time_period: {
      get() {
        return this.$store.state.Contract.form.time_period;
      },
      set(value) {
        // console.info(value);
        this.$store.commit("Contract/INSERT_FORM_TIME_PERIOD", {
          time_period: value,
        });
      },
    },
    date_start: {
      get() {
        return this.$store.state.Contract.form.date_start;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_DATE_START", {
          date_start: value,
        });
      },
    },
    date_end: {
      get() {
        return this.$store.state.Contract.form.date_end;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_DATE_END", {
          date_end: value,
        });
      },
    },
    name_item: {
      get() {
        return this.$store.state.Contract.form.name_item;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_NAME_ITEM", {
          name_item: value,
        });
      },
    },
    type_item: {
      get() {
        return this.$store.state.Contract.form.type_item;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_TYPE_ITEM", {
          type_item: value,
        });
      },
    },
    type_sub_item: {
      get() {
        return this.$store.state.Contract.form.type_sub_item;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_TYPE_SUB_ITEM", {
          type_sub_item: value,
        });
      },
    },
    etc: {
      get() {
        return this.$store.state.Contract.form.etc;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_ETC", {
          etc: value,
        });
      },
    },
    complete_item: {
      get() {
        return this.$store.state.Contract.form.complete_item;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_COMPLETE_ITEM", {
          complete_item: value,
        });
      },
    },
    deficiency_item: {
      get() {
        return this.$store.state.Contract.form.deficiency_item;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_DEFICIENCY_ITEM", {
          deficiency_item: value,
        });
      },
    },
    note_item: {
      get() {
        return this.$store.state.Contract.form.note_item;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_NOTE_ITEM", {
          note_item: value,
        });
      },
    },
    // taksiran marhun
    asset_valuation: {
      get() {
        return this.$store.state.Contract.form.asset_valuation_read;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_ASSET_VALUATION", {
          asset_valuation: value,
        });
      },
    },
    // Marhun Bih
    interest_free_loan: {
      get() {
        return this.$store.state.Contract.form.interest_free_loan_read;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_INTEREST_FREE_LOAN", {
          interest_free_loan: value,
        });
      },
    },
    payment_method: {
      get() {
        return this.$store.state.Contract.form.payment_method;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_PAYMENT_METHOD", {
          payment_method: value,
        });
      },
    },
    comission_fee: {
      get() {
        return this.$store.state.Contract.form.comission_fee_read;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_COMISSION_FEE", {
          comission_fee: value,
        });
      },
    },
    comission_fee_paid: {
      get() {
        return this.$store.state.Contract.form.comission_fee_paid;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_COMISSION_FEE_PAID", {
          comission_fee_paid: value,
        });
      },
    },
    comission_fee_paid_total: {
      get() {
        return this.$store.state.Contract.form.comission_fee_paid_total_read;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_COMISSION_FEE_PAID_TOTAL", {
          comission_fee_paid_total: value,
        });
      },
    },
    admin_fee: {
      get() {
        return this.$store.state.Contract.form.admin_fee_read;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_ADMIN_FEE", {
          admin_fee: value,
        });
      },
    },
    in_text: {
      get() {
        return this.$store.state.Contract.form.in_text;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_IN_TEXT", {
          in_text: value,
        });
      },
    },
  },
  watch: {
    date_start(value) {
      this.$store.dispatch("Contract/onChangeDateEnd");
    },
    time_period(value, oldValue) {
      this.$store.dispatch("Contract/onChangeDateEnd");
      // option.Comission_fee_paids
      this.$store.dispatch("Contract/onChangeOptionComissionFeePaids");
    },
    payment_method(value, oldValue) {
      // option.Comission_fee_paids
      this.$store.dispatch("Contract/onChangeOptionComissionFeePaids");
    },
    // marhun bih
    interest_free_loan(value, oldValue) {
      // option.Comission_fee_paids
      this.$store.dispatch("Contract/onChangeComissionFee");
      this.$store.dispatch("Contract/onChangeComissionFeePaidTotal");

      this.$store.commit("Contract/INSERT_FORM_IN_TEXT");
    },
    comission_fee_paid(value, oldValue) {
      this.$store.dispatch("Contract/onChangeComissionFeePaidTotal");
    },
    type_item(value) {
      this.$store.commit("Contract/INSERT_FORM_TYPE_SUB_ITEM", {
        type_sub_item: "",
      });
      this.$store.dispatch("Contract/onChangeAdminFee");
    },
  },
  methods: {
    onChangeTab(tab_active) {
      // let tab_active = null;

      // if (name_tab == "item") {
      //   if (direction == "next") {
      //     tab_active = "customer";
      //   } else if (direction == "prev") {
      //     tab_active = "item";
      //   }
      // }

      this.$store.commit("Contract/UPDATE_TAB_ACTIVE", {
        tab_active: tab_active,
      });
    },
    onClearForm() {
      this.$store.commit("Contract/CLEAR_FORM");
    },
    onChooseTypeItem(value) {
      console.info(value);
    },
  },
};