<template>
  <div>
    <br />
    <h4>Data Customer</h4>
    <hr />
    <b-row>
      <b-col col sm="12" md="3">
        <b-form-group label="Full Name" label-for="name">
          <b-form-input v-model="name" id="name" name="name" />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <!-- <b-form-group label="Gender" v-slot="{ ariaDescribedby }">
          <b-form-radio
            v-model="gender"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="man"
          >Man</b-form-radio>
          <b-form-radio
            v-model="gender"
            :aria-describedby="ariaDescribedby"
            name="some-radios"
            value="female"
          >Fimale</b-form-radio>
        </b-form-group>-->
        <b-form-group label="Gender" label-for="gender">
          <b-form-select id="gender" name="gender" v-model="gender" :options="getOptionGenders"></b-form-select>
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <b-form-group label="Address" label-for="address">
          <b-form-input v-model="address" id="address" name="address" />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <b-form-group label="City" label-for="city_id">
          <b-form-input v-model="city_id" id="city_id" name="city_id" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row style="margin-top: 20px">
      <b-col col sm="12" md="3">
        <b-form-group label="No Telp" label-for="no_telp">
          <b-form-input v-model="no_telp" id="no_telp" name="no_telp" />
        </b-form-group>
      </b-col>

      <b-col col sm="12" md="3">
        <b-form-group label="National ID Card" label-for="national_id_card">
          <b-form-input v-model="national_id_card" id="national_id_card" name="national_id_card" />
        </b-form-group>
      </b-col>

      <b-col col sm="12" md="3">
        <b-form-group label="Driver License" label-for="driver_license">
          <b-form-input v-model="driver_license" id="driver_license" name="driver_license" />
        </b-form-group>
      </b-col>

      <b-col col sm="12" md="3">
        <b-form-group label="Family Card" label-for="family_card">
          <b-form-input v-model="family_card" id="family_card" name="family_card" />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row style="margin-top: 40px">
      <b-col cols></b-col>
      <b-col col md="2" style="text-align-last: right;">
        <!-- <b-button class variant="danger" style="margin-right: 20px;" @click="onClearForm()">Batal</b-button> -->
        <b-button class variant="success" @click="onChangeTab('item')" :disabled="is_loading">Prev</b-button>
        <b-button
          variant="success"
          @click="onConfirmData()"
          :disabled="is_loading"
          style="margin-left: 20px"
        >Send</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      is_loading: false,
    };
  },
  computed: {
    getOptionGenders() {
      return this.$store.state.Contract.options.genders;
    },
    name: {
      get() {
        return this.$store.state.Contract.form.customer.name;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_CUSTOMER_NAME", {
          name: value,
        });
      },
    },
    date_birth: {
      get() {
        return this.$store.state.Contract.form.customer.date_birth;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_CUSTOMER_DATE_BIRTH", {
          date_birth: value,
        });
      },
    },
    gender: {
      get() {
        return this.$store.state.Contract.form.customer.gender;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_CUSTOMER_GENDER", {
          gender: value,
        });
      },
    },
    address: {
      get() {
        return this.$store.state.Contract.form.customer.address;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_CUSTOMER_ADDRESS", {
          address: value,
        });
      },
    },
    city_id: {
      get() {
        return this.$store.state.Contract.form.customer.city_id;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_CUSTOMER_CITY", {
          city_id: value,
        });
      },
    },
    no_telp: {
      get() {
        return this.$store.state.Contract.form.customer.no_telp;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_CUSTOMER_NO_TELP", {
          no_telp: value,
        });
      },
    },
    national_id_card: {
      get() {
        return this.$store.state.Contract.form.customer.national_id_card;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_CUSTOMER_NATIONAL_ID_CARD", {
          national_id_card: value,
        });
      },
    },
    driver_license: {
      get() {
        return this.$store.state.Contract.form.customer.driver_license;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_CUSTOMER_DRIVER_LICENSE", {
          driver_license: value,
        });
      },
    },
    family_card: {
      get() {
        return this.$store.state.Contract.form.customer.family_card;
      },
      set(value) {
        this.$store.commit("Contract/INSERT_FORM_CUSTOMER_FAMILY_CARD", {
          family_card: value,
        });
      },
    },
  },
  methods: {
    onChangeTab(tab_active) {
      this.$store.commit("Contract/UPDATE_TAB_ACTIVE", {
        tab_active: tab_active,
      });
    },
    onConfirmData() {
      this.$bvModal.show("contract_confirm_data");
    },
  },
};
</script>

<style lang="scss" scoped></style>
