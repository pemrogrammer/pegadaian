<template>
  <div class="container-fluid p-0">
    <h1 class="h3 mb-3">
      <strong>Analytics</strong>
      Dashboard
      <br />
      <b-button variant="info" size="sm" @click="onSend">send</b-button>
    </h1>
  </div>
</template>

<script>
export default {
  methods: {
    onSend() {
      console.info("on send");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>