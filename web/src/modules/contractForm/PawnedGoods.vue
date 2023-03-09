<template>
  <div>
    <br />
    <h3>Waktu</h3>
    <hr />
    <b-row>
      <b-col col md="3">
        <b-form-group label="Number ID" label-for="number_id">
          <b-form-input v-model="number_id" id="number_id" name="number_id" readonly />
        </b-form-group>
      </b-col>
      <b-col col md="3">
        <b-form-group label="Term Of Contract" label-for="term_contract">
          <VueSelect
            id="term_contract"
            class="cursor-pointer"
            v-model="term_contract"
            placeholder="Pilih Departemen"
            :options="getOptionTermContracts"
            :reduce="(data) => data.id"
            label="label"
            searchable
          />
        </b-form-group>
      </b-col>
      <b-col col md="3">
        <b-form-group label="Date Start Contract" label-for="date_start">
          <DatePicker
            id="date_start"
            v-model="date_start"
            format="YYYY-MM-DD"
            type="date"
            placeholder="pilih tanggal"
          />
        </b-form-group>
      </b-col>
      <b-col col md="3">
        <b-form-group label="Due Date of the Contract" label-for="date_end">
          <DatePicker
            id="date_end"
            v-model="date_end"
            format="YYYY-MM-DD"
            type="date"
            placeholder="pilih tanggal"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col cols>
        <b-button
          class="float-right ml-4"
          variant="success"
          @click="onSend()"
          :disabled="is_loading"
        >Kirim</b-button>
        <b-button class="float-right" variant="outline-danger" @click="onClearForm()">Batal</b-button>
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
  computed: {
    getForm() {
      return this.$store.state.ContractForm.form;
    },
    getOptionTermContracts() {
      return this.$store.state.ContractForm.options.term_contracts;
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
    term_contract: {
      get() {
        return this.$store.state.ContractForm.form.term_contract;
      },
      set(value) {
        this.$store.commit("ContractForm/INSERT_FORM_TERM_CONTRACT", {
          term_contract: value,
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
  },
  watch: {
    term_contract(value, oldValue) {
      this.$store.dispatch("ContractForm/onChangeDateEnd");
    },
  },
  methods: {
    onSend() {
      console.info(this.getForm);
    },
    onClearForm() {
      this.$store.commit("ContractForm/CLEAR_FORM");
    },
  },
};
</script>

<style lang="scss" scoped></style>
