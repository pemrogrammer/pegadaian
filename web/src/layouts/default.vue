<template>
  <SideBar>
    <template v-slot:content>
      <router-view></router-view>
    </template>
  </SideBar>
</template>

<script>
import SideBar from "@/components/SideBar";

export default {
  components: {
    SideBar,
  },
};
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
</style>