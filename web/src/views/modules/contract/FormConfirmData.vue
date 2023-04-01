<template>
  <div>
    <br />
    <h3>Time</h3>
    <hr />
    <b-row>
      <b-col col sm="12" md="3">
        <b-form-group label="Number ID" label-for="number_id">
          <!-- <b-form-input v-model="number_id" id="number_id" name="number_id" disabled /> -->
        </b-form-group>
      </b-col>
    </b-row>
    <b-row style="margin-top: 40px">
      <b-col cols></b-col>
      <b-col col md="2" style="text-align-last: right;">
        <!-- <b-button class variant="danger" style="margin-right: 20px;" @click="onClearForm()">Batal</b-button> -->
        <b-button
          class
          variant="success"
          @click="onChangeTab('customer')"
          :disabled="is_loading"
        >Prev</b-button>
        <b-button
          class
          variant="success"
          @click="onConfirmData()"
          :disabled="is_loading"
          style="margin-left: 20px"
        >Kirim</b-button>
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
  methods: {
    onChangeTab(tab_active) {
      this.$store.commit("ContractForm/UPDATE_TAB_ACTIVE", {
        tab_active: tab_active,
      });
    },
    onConfirmData() {
      console.info("confirm data");
    },
  },
};
</script>

<style lang="scss" scoped></style>
