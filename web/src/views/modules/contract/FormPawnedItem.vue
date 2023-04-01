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
            v-model="time_period"
            placeholder="choose time periode"
            :options="getOptionTimePeriodes"
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
            label="label"
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
            label="label"
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
        <b-form-group label="Comission Fee" label-for="comission_fee">
          <b-form-input v-model="comission_fee" id="comission_fee" name="comission_fee" disabled />
        </b-form-group>
      </b-col>
    </b-row>
    <br />
    <b-row>
      <b-col col sm="12" md="3">
        <!-- Biaya Titip yang Dibayar -->
        <b-form-group label="Comission Fee Paided" label-for="comission_fee_paid">
          <VueSelect
            id="comission_fee_paid"
            class="cursor-pointer"
            v-model="comission_fee_paid"
            placeholder="choose comission paid"
            :options="getOptionComissionFeePaids"
            :reduce="(data) => data.value"
            label="label"
            searchable
          />
        </b-form-group>
      </b-col>
      <b-col col sm="12" md="3">
        <!-- Jumlah Biaya Titip yang Dibayar -->
        <b-form-group label="Total Comission Fee Paided" label-for="comission_fee_paid_total">
          <b-form-input
            v-model="comission_fee_paid_total"
            id="comission_fee_paid_total"
            name="comission_fee_paid_total"
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
        <!-- <b-button class variant="danger" style="margin-right: 20px;" @click="onClearForm()">Batal</b-button> -->
        <b-button
          class
          variant="success"
          @click="onChangeTab('customer')"
          :disabled="is_loading"
        >Next</b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script src="./FormPawnedItemScript.js"></script>

<style lang="scss" scoped></style>
