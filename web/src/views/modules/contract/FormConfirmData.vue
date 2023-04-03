<template>
  <!-- START MODAL FORM CREATE -->
  <b-modal
    id="contract_confirm_data"
    ref="contract_confirm_data"
    size="xl"
    :title="getTitleForm"
    hide-footer
  >
    <b-row style="padding: 10px 0px 10px 0px;">
      <b-col col md="3">
        <table>
          <tbody>
            <!-- <tr v-for="(item, index) in getColumns()" :key="index"> -->
            <tr>
              <td>Number ID</td>
              <td>: {{getForm.number_id}}</td>
            </tr>
            <tr>
              <td>Time Period</td>
              <td>: {{getForm.time_period}} Days</td>
            </tr>
            <tr>
              <td>Date Start</td>
              <td>: {{getDateReadable(getForm.date_start)}}</td>
            </tr>
            <tr>
              <td>Date End</td>
              <td>: {{getDateReadable(getForm.date_end)}}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col col md="4">
        <table>
          <tbody>
            <tr>
              <td>Name Item</td>
              <td>: {{getForm.name_item}}</td>
            </tr>
            <tr>
              <td>Type Item</td>
              <td>: {{getForm.type_item}}</td>
            </tr>
            <tr>
              <td>Type Sub Item</td>
              <td>: {{getForm.type_sub_item}}</td>
            </tr>
            <tr>
              <td>Complete Item</td>
              <td>: {{getForm.complete_item}}</td>
            </tr>
            <tr>
              <td>Deficiency Item</td>
              <td>: {{getForm.deficiency_item}}</td>
            </tr>
            <tr>
              <td>Note Item</td>
              <td>: {{getForm.note_item}}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col col md="4">
        <table>
          <tbody>
            <tr>
              <td>Asset Valuation</td>
              <td>: {{getForm.asset_valuation}}</td>
            </tr>
            <tr>
              <td>Interest-free Loan</td>
              <td>: {{getForm.interest_free_loan}}</td>
            </tr>
            <tr>
              <td>Payment Method</td>
              <td>: {{getForm.payment_method}}</td>
            </tr>
            <tr>
              <td>Commission Fee</td>
              <td>: {{getForm.comission_fee}}</td>
            </tr>
            <tr>
              <td>Commission Fee Paid</td>
              <td>: {{getForm.comission_fee_paid_read}}</td>
            </tr>
            <tr>
              <td>Commission Fee Paid Total</td>
              <td>: {{getForm.comission_fee_paid_total_read}}</td>
            </tr>
            <tr>
              <td>Admin Fee</td>
              <td>: {{getForm.admin_fee_read}}</td>
            </tr>
            <tr>
              <td>In Text</td>
              <td>: {{getForm.in_text}}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
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
  computed: {
    getForm() {
      return this.$store.state.Contract.form;
    },
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
    onCloseModal() {
      this.$bvModal.hide("contract_confirm_data");
    },
    onSend() {},
    getColumns() {
      const allowColumns = ["number_id", "discont"];
      return Object.keys(this.getForm).filter((item) =>
        allowColumns.includes(item)
      );
    },
    getDateReadable(date) {
      return this.$store.getters["Contract/getDateReadable"](date);
    },
  },
};
</script>

<style lang="scss" scoped></style>
