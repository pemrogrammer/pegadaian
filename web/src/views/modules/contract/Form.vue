<template>
  <div class="row">
    <div class="col-md-12">
      <b-card no-body>
        <b-card-header header-tag="nav">
          <b-tabs content-class="mt-3">
            <b-tab title="Pawned Items" active>
              <PawnedGoods />
            </b-tab>
            <b-tab title="Customer Data">
              <CustomerData />
            </b-tab>
            <b-tab title="Confirm Data">
              <ConfirmData />
            </b-tab>
          </b-tabs>
        </b-card-header>
      </b-card>
    </div>
  </div>
</template>

<script>
// partials
import PawnedGoods from "@/views/modules/contract/FormPawnedGoods";
import CustomerData from "@/views/modules/contract/FormCustomerData";
import ConfirmData from "@/views/modules/contract/FormConfirmData";

export default {
  data() {
    return {
      title: "Contract Form",
    };
  },
  components: {
    PawnedGoods,
    CustomerData,
    ConfirmData,
  },
  methods: {
    onComplete() {
      console.info("complete");
    },
  },
};
</script>

<style lang="scss" scoped></style>
