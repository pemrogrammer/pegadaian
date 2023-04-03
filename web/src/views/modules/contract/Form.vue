<template>
  <div class="row">
    <div class="col-md-12">
      <b-card no-body>
        <b-card-header header-tag="nav">
          <b-tabs content-class="mt-3">
            <b-tab
              title="Pawned Items"
              :active="onActiveTab('item')"
              :disabled="!onActiveTab('item')"
            >
              <PawnedItem />
            </b-tab>
            <b-tab
              title="Customer Data"
              :active="onActiveTab('customer')"
              :disabled="!onActiveTab('customer')"
            >
              <CustomerData />
            </b-tab>
          </b-tabs>
        </b-card-header>
      </b-card>
    </div>

    <ConfirmData />
  </div>
</template>

<script>
// partials
import PawnedItem from "@/views/modules/contract/FormPawnedItem";
import CustomerData from "@/views/modules/contract/FormCustomerData";
import ConfirmData from "@/views/modules/contract/FormConfirmData";
export default {
  data() {
    return {
      title: "Contract Form",
    };
  },
  components: {
    PawnedItem,
    CustomerData,
    ConfirmData,
    ConfirmData,
  },
  mounted() {
    this.$bvModal.show("contract_confirm_data");
  },
  computed: {
    tab_active() {
      return this.$store.state.Contract.tab_active;
    },
  },
  methods: {
    onComplete() {
      console.info("complete");
    },
    onActiveTab(name_tab) {
      return this.tab_active == name_tab ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped></style>
