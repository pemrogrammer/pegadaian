<template>
  <div>
    <br />
    <h3>Time</h3>
    <hr />
    <b-row>
      <b-col col sm="12" md="3">
        <b-form-group label="Number ID" label-for="number_id">
          <b-form-input v-model="number_id" id="number_id" name="number_id" disabled />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="2">
        <b-form-group label="Time of Periode" label-for="time_period">
          <VueSelect
            id="time_period"
            class="cursor-pointer"
<<<<<<< HEAD
            v-model="term_contract"
            placeholder="Pilih Departemen"
            :options="getOptionTermContracts"
=======
            v-model="time_period"
            placeholder="choose time periode"
            :options="getOptionTimePeriodes"
>>>>>>> 5249e4bf29f6179e9008617123153ed8479187de
            :reduce="(data) => data.value"
            label="label"
            searchable
          />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="2" style="padding-right: 0px">
        <b-form-group label="Date Start Contract" label-for="date_start">
          <DatePicker
            id="date_start"
            v-model="date_start"
            format="YYYY-MM-DD"
            type="date"
            placeholder="choose date start"
          />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <b-form-group label="Due Date of the Contract" label-for="date_end">
          <DatePicker
            id="date_end"
            v-model="date_end"
            format="YYYY-MM-DD"
            type="date"
            placeholder="choose due date"
            disabled
          />
        </b-form-group>
      </b-col>
    </b-row>
    <br />
    <br />
    <h3>Pawned Items</h3>
    <hr />
    <b-row>
      <b-col col sm="12" md="3">
        <b-form-group label="Name Item" label-for="name_item">
          <b-form-input v-model="name_item" id="name_item" name="name_item" />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <b-form-group label="Type Item" label-for="type_item">
          <VueSelect
            id="type_item"
            class="cursor-pointer"
            v-model="type_item"
            placeholder="choose item"
            :options="getOptionTypeItems"
            :reduce="(data) => data.value"
            label="text"
            searchable
          />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <b-form-group label="Type Sub Item" label-for="type_sub_item">
          <VueSelect
            id="type_sub_item"
            class="cursor-pointer"
            v-model="type_sub_item"
            placeholder="choose sub item"
            :options="getOptionTypeSubItems"
            :reduce="(data) => data.value"
            label="text"
            searchable
          />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <b-form-group label="." style="color: white" v-if="type_sub_item == 'etc'" label-for="etc">
          <b-form-input v-model="etc" id="etc" name="etc" />
        </b-form-group>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col col sm="12" md="3">
        <b-form-group label="Description Of Item" label-for="complete_item">
          <b-form-textarea
            id="complete_item"
            v-model="complete_item"
            placeholder="insert complete item"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <b-form-group label="Description Of Item" label-for="deficiency_item">
          <b-form-textarea
            id="deficiency_item"
            v-model="deficiency_item"
            placeholder="insert deficiency item"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <b-form-group label="Note Of Item" label-for="note_item">
          <b-form-textarea
            id="note_item"
            v-model="note_item"
            placeholder="insert note item"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
        </b-form-group>
      </b-col>
    </b-row>
    <br />
    <br />
    <h3>Value of Item</h3>
    <hr />
    <b-row>
      <b-col col sm="12" md="3">
        <!-- taksiran marhun -->
        <b-form-group label="Asset Valuation" label-for="asset_valuation">
          <b-form-input v-model="asset_valuation" id="asset_valuation" name="asset_valuation" />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <!-- Marhun Bih -->
        <b-form-group label="Interest-free loan" label-for="interest_free_loan">
          <b-form-input
            v-model="interest_free_loan"
            id="interest_free_loan"
            name="interest_free_loan"
          />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <!-- opsi pembayaran -->
        <b-form-group label="Payment Method" label-for="payment_method">
          <VueSelect
            id="payment_method"
            class="cursor-pointer"
            v-model="payment_method"
            placeholder="choose time periode"
            :options="getOptionPaymentMethods"
            :reduce="(data) => data.value"
            label="label"
            searchable
          />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <!-- biaya titip -->
        <b-form-group label="Commission Fee" label-for="deposit_fee">
          <b-form-input v-model="deposit_fee" id="deposit_fee" name="deposit_fee" disabled />
        </b-form-group>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col col sm="12" md="3">
        <!-- Biaya Titip yang Dibayar -->
        <b-form-group label="Deposit Fee Paided" label-for="deposit_fee_paid">
          <VueSelect
            id="deposit_fee_paid"
            class="cursor-pointer"
            v-model="deposit_fee_paid"
            placeholder="choose deposit paid"
            :options="getOptionDepositFeePaids"
            :reduce="(data) => data.value"
            label="label"
            searchable
          />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <!-- Jumlah Biaya Titip yang Dibayar -->
        <b-form-group label="Total Deposit Fee Paided" label-for="deposit_fee_paid_total">
          <b-form-input
            v-model="deposit_fee_paid_total"
            id="deposit_fee_paid_total"
            name="deposit_fee_paid_total"
            disabled
          />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <!-- Biaya Admin -->
        <b-form-group label="Admin Fee" label-for="admin_fee">
          <b-form-input v-model="admin_fee" id="admin_fee" name="admin_fee" disabled />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <!-- Terbilang -->
        <b-form-group label="In Text" label-for="in_text">
          <b-form-input v-model="in_text" id="in_text" name="in_text" disabled />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row style="margin-top: 40px">
      <b-col cols></b-col>
      <b-col col md="2" style="text-align-last: right;">
        <b-button class variant="danger" style="margin-right: 20px;" @click="onClearForm()">Batal</b-button>
        <b-button class variant="success" @click="onSend()" :disabled="is_loading">Kirim</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
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
    // option.deposit_fee_paids
    this.$store.dispatch("ContractForm/onChangeOptionDepositFeePaids");
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
    getOptionDepositFeePaids() {
      return this.$store.state.ContractForm.options.deposit_fee_paids;
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
        return this.$store.state.ContractForm.form.read_asset_valuation;
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
        return this.$store.state.ContractForm.form.read_interest_free_loan;
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
    deposit_fee: {
      get() {
        return this.$store.state.ContractForm.form.deposit_fee;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_DEPOSIT_FEE", {
          deposit_fee: value,
        });
      },
    },
    deposit_fee_paid: {
      get() {
        return this.$store.state.ContractForm.form.deposit_fee_paid;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_DEPOSIT_FEE_PAID", {
          deposit_fee_paid: value,
        });
      },
    },
    deposit_fee_paid_total: {
      get() {
        return this.$store.state.ContractForm.form.deposit_fee_paid_total;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_DEPOSIT_FEE_PAID_TOTAL", {
          deposit_fee_paid_total: value,
        });
      },
    },
    admin_fee: {
      get() {
        return this.$store.state.ContractForm.form.admin_fee;
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
      // option.deposit_fee_paids
      this.$store.dispatch("ContractForm/onChangeOptionDepositFeePaids");
    },
    payment_method(value, oldValue) {
      // option.deposit_fee_paids
      this.$store.dispatch("ContractForm/onChangeOptionDepositFeePaids");
    },
    interest_free_loan(value, oldValue) {
      // option.deposit_fee_paids
      this.$store.dispatch("ContractForm/onChangeDepositFee");
      this.$store.dispatch("ContractForm/onChangeDepositFeePaidTotal");
    },
    deposit_fee_paid(value, oldValue) {
      this.$store.dispatch("ContractForm/onChangeDepositFeePaidTotal");
    },
    type_item(value) {
      this.$store.commit("ContractForm/INSERT_FORM_TYPE_SUB_ITEM", {
        type_sub_item: "",
      });
    },
  },
  methods: {
    onSend() {
      console.info(this.getForm);
    },
    onClearForm() {
      this.$store.commit("ContractForm/CLEAR_FORM");
    },
    onChooseTypeItem(value) {
      console.info(value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
