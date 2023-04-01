<template>
  <!-- START MODAL FORM CREATE -->
  <b-modal
    id="contract_confirm_data"
    ref="contract_confirm_data"
    size="xl"
    :title="getTitleForm"
    hide-footer
  >
    <b-row>
      <b-col col md="12">confirm data</b-col>
    </b-row>
    <br />
    <hr />
    <b-row>
      <b-col>
        <b-button variant="info" @click="onCloseModal()">Tutup</b-button>
        <b-button
          variant="success"
          @click="onSend()"
          :disabled="is_loading"
          style="margin-left: 30px"
        >Simpan</b-button>
        <span v-if="is_loading">Loading...</span>
      </b-col>
    </b-row>
  </b-modal>
</template>

<script>
export default {
  data() {
    return {
      getTitleForm: "Confirm Data",
      is_loading: false,
    };
  },
  methods: {
    onChangeTab(tab_active) {
      this.$store.commit("Contract/UPDATE_TAB_ACTIVE", {
        tab_active: tab_active,
      });
    },
    onConfirmData() {
      console.info("confirm data");
    },
    onCloseModal() {},
    onSend() {},
  },
};
</script>

<style lang="scss" scoped></style>
