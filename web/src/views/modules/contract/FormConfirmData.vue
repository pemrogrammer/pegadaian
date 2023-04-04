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
      <b-col class="title-category">Pawned Items :</b-col>
    </b-row>
    <b-row style="padding: 10px 0px 10px 0px;">
      <b-col col md="4">
        <table>
          <tbody>
            <tr>
              <td class="space-title-attribute">Number ID</td>
              <td class="space-value">{{getForm.number_id}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Time Period</td>
              <td class="space-value">{{getForm.time_period}} Days</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Date Start</td>
              <td class="space-value">{{getDateReadable(getForm.date_start)}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Date End</td>
              <td class="space-value">{{getDateReadable(getForm.date_end)}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Name Item</td>
              <td class="space-value">{{getForm.name_item}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Type Item</td>
              <td class="space-value">{{getForm.type_item}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Type Sub Item</td>
              <td class="space-value">{{getForm.type_sub_item}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Complete Item</td>
              <td class="space-value">{{getForm.complete_item}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Deficiency Item</td>
              <td class="space-value">{{getForm.deficiency_item}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Note Item</td>
              <td class="space-value">{{getForm.note_item}}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <!-- <b-col col md="4">
        <table>
          <tbody>
            
          </tbody>
        </table>
      </b-col>-->
      <b-col col md="8">
        <table>
          <tbody>
            <tr>
              <td class="space-title-attribute">Asset Valuation</td>
              <td class="space-value">{{getForm.asset_valuation_read}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Interest-free Loan</td>
              <td class="space-value">{{getForm.interest_free_loan_read}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Payment Method</td>
              <td class="space-value">{{getForm.payment_method}} Days</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Commission Fee</td>
              <td class="space-value">{{getForm.comission_fee_read}}</td>
            </tr>
            <!-- <tr>
              <td class="space-title-attribute">Commission Fee Paid</td>
              <td class="space-value"> {{getForm.comission_fee_paid_read}}</td>
            </tr>-->
            <tr>
              <td class="space-title-attribute">Commission Fee Paid Total</td>
              <td class="space-value">{{getForm.comission_fee_paid_total_read}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Admin Fee</td>
              <td class="space-value">{{getForm.admin_fee_read}}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">In Text</td>
              <td class="space-value">{{getForm.in_text}}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col class="title-category">Data Customer :</b-col>
    </b-row>
    <b-row style="padding: 10px 0px 10px 0px;">
      <b-col col md="4">
        <table>
          <tbody>
            <tr>
              <td class="space-title-attribute">Full Name</td>
              <td class="space-value">{{ getForm.customer.name }}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Date Birth</td>
              <td class="space-value">{{ getForm.customer.date_birth }}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Gender</td>
              <td class="space-value">{{ getForm.customer.gender }}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Address</td>
              <td class="space-value">{{ getForm.customer.address }}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">City</td>
              <td class="space-value">{{ getForm.customer.city_name }}</td>
            </tr>
          </tbody>
        </table>
      </b-col>
      <b-col col md="4">
        <table>
          <tbody>
            <tr>
              <td class="space-title-attribute">Phone Number</td>
              <td class="space-value">{{ getForm.customer.no_telp }}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">National ID Card</td>
              <td class="space-value">{{ getForm.customer.national_id_card }}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Driver License</td>
              <td class="space-value">{{ getForm.customer.driver_license }}</td>
            </tr>
            <tr>
              <td class="space-title-attribute">Family Card</td>
              <td class="space-value">{{ getForm.customer.family_card }}</td>
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
    onSend() {
      //
    },
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

<style lang="scss" scoped>
.title-category {
  font-size: 20px;
  color: #909090;
}
.space-title-attribute {
  //font-weight: 500;
  color: #888888;
}
.space-value {
  padding: 0px 10px 0px 10px;
  font-weight: 500;
}

td {
  padding: 5px;
}
</style>
