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
    this.$store.dispatch("ContractForm/onChangeOptionComissionFeePaids");
  },
  computed: {
    getForm() {
      return this.$store.state.ContractForm.form;
    },
    getOptionTimePeriodes() {
      return this.$store.state.ContractForm.options.time_periods;
    },
    getOptionPaymentMethods() {
      return this.$store.state.ContractForm.options.payment_methods;
    },
    getOptionTypeItems() {
      return this.$store.state.ContractForm.options.type_items;
    },
    getOptionTypeSubItems() {
      return this.$store.state.ContractForm.options.type_sub_items[
        this.type_item
      ];
    },
    getOptionComissionFeePaids() {
      return this.$store.state.ContractForm.options.comission_fee_paids;
    },
    number_id: {
      get() {
        return this.$store.state.ContractForm.form.number_id;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_NUMBER_ID", {
          number_id: value,
        });
      },
    },
    time_period: {
      get() {
        return this.$store.state.ContractForm.form.time_period;
      },
      set(value) {
        // console.info(value);
        this.$store.commit("ContractForm/INSERT_FORM_TIME_PERIOD", {
          time_period: value,
        });
      },
    },
    date_start: {
      get() {
        return this.$store.state.ContractForm.form.date_start;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_DATE_START", {
          date_start: value,
        });
      },
    },
    date_end: {
      get() {
        return this.$store.state.ContractForm.form.date_end;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_DATE_END", {
          date_end: value,
        });
      },
    },
    name_item: {
      get() {
        return this.$store.state.ContractForm.form.name_item;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_NAME_ITEM", {
          name_item: value,
        });
      },
    },
    type_item: {
      get() {
        return this.$store.state.ContractForm.form.type_item;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_TYPE_ITEM", {
          type_item: value,
        });
      },
    },
    type_sub_item: {
      get() {
        return this.$store.state.ContractForm.form.type_sub_item;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_TYPE_SUB_ITEM", {
          type_sub_item: value,
        });
      },
    },
    etc: {
      get() {
        return this.$store.state.ContractForm.form.etc;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_ETC", {
          etc: value,
        });
      },
    },
    complete_item: {
      get() {
        return this.$store.state.ContractForm.form.complete_item;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_COMPLETE_ITEM", {
          complete_item: value,
        });
      },
    },
    deficiency_item: {
      get() {
        return this.$store.state.ContractForm.form.deficiency_item;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_DEFICIENCY_ITEM", {
          deficiency_item: value,
        });
      },
    },
    note_item: {
      get() {
        return this.$store.state.ContractForm.form.note_item;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_NOTE_ITEM", {
          note_item: value,
        });
      },
    },
    // taksiran marhun
    asset_valuation: {
      get() {
        return this.$store.state.ContractForm.form.asset_valuation_read;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_ASSET_VALUATION", {
          asset_valuation: value,
        });
      },
    },
    // Marhun Bih
    interest_free_loan: {
      get() {
        return this.$store.state.ContractForm.form.interest_free_loan_read;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_INTEREST_FREE_LOAN", {
          interest_free_loan: value,
        });
      },
    },
    payment_method: {
      get() {
        return this.$store.state.ContractForm.form.payment_method;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_PAYMENT_METHOD", {
          payment_method: value,
        });
      },
    },
    comission_fee: {
      get() {
        return this.$store.state.ContractForm.form.comission_fee_read;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_COMISSION_FEE", {
          comission_fee: value,
        });
      },
    },
    comission_fee_paid: {
      get() {
        return this.$store.state.ContractForm.form.comission_fee_paid;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_COMISSION_FEE_PAID", {
          comission_fee_paid: value,
        });
      },
    },
    comission_fee_paid_total: {
      get() {
        return this.$store.state.ContractForm.form.comission_fee_paid_total_read;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_COMISSION_FEE_PAID_TOTAL", {
          comission_fee_paid_total: value,
        });
      },
    },
    admin_fee: {
      get() {
        return this.$store.state.ContractForm.form.admin_fee_read;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_ADMIN_FEE", {
          admin_fee: value,
        });
      },
    },
    in_text: {
      get() {
        return this.$store.state.ContractForm.form.in_text;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_IN_TEXT", {
          in_text: value,
        });
      },
    },
  },
  watch: {
    date_start(value) {
      this.$store.dispatch("ContractForm/onChangeDateEnd");
    },
    time_period(value, oldValue) {
      this.$store.dispatch("ContractForm/onChangeDateEnd");
      // option.Comission_fee_paids
      this.$store.dispatch("ContractForm/onChangeOptionComissionFeePaids");
    },
    payment_method(value, oldValue) {
      // option.Comission_fee_paids
      this.$store.dispatch("ContractForm/onChangeOptionComissionFeePaids");
    },
    // marhun bih
    interest_free_loan(value, oldValue) {
      // option.Comission_fee_paids
      this.$store.dispatch("ContractForm/onChangeComissionFee");
      this.$store.dispatch("ContractForm/onChangeComissionFeePaidTotal");

      this.$store.commit("ContractForm/INSERT_FORM_IN_TEXT");
    },
    comission_fee_paid(value, oldValue) {
      this.$store.dispatch("ContractForm/onChangeComissionFeePaidTotal");
    },
    type_item(value) {
      this.$store.commit("ContractForm/INSERT_FORM_TYPE_SUB_ITEM", {
        type_sub_item: "",
      });
      this.$store.dispatch("ContractForm/onChangeAdminFee");
    },
  },
  methods: {
    onSend() {
      console.info(this.getForm);
    },
    onClearForm() {
      this.$store.commit("contractForm/CLEAR_FORM");
    },
    onChooseTypeItem(value) {
      console.info(value);
    },
  },
};